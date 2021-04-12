/*
author:菱志漪
wechat:lovexyx2020
qq:1460334467

说明：绝大部分代码来自github各位大佬，项目名称和github地址会相应的放在函数开头，如有侵权请通过上方的微信或qq即时清除

最后，学习ast与js逆向请找蔡老板(wechat:deepcry)，学习安卓逆向请找肉丝姐(wechat:r0ysue)，感谢他们带我入门，感谢一起学习的小伙伴。

*/
var StringClass = null;
var ByteString = null;
var currentApplication = null;
var context = null;
// var Gson = null;
function before_hook() {
    Java.perform(function () {
        StringClass = Java.use("java.lang.String");
        ByteString = Java.use("com.android.okhttp.okio.ByteString"); // ByteString.of(bArr).hex()
        currentApplication = Java.use("android.app.ActivityThread").currentApplication();
        context = currentApplication.getApplicationContext();
        // Gson = Java.use("com.google.gson.Gson");
    });
}

function print_stackTrace() {
    Java.perform(function () {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    });
}

function print_equals(num, symbol) {
    console.log(new Array(num).join(symbol));
}
// query函数的作用是快速查找匹配的类以及方法，用来后续的批量trace以及快速定位
function query(classname, method) {
    // '*Base64*!*encode*'
    // '**!*encode*' match all methods who contains encrypt
    // '*Base64*!**' match all classes
    var filterPattern = "*Base64*!*encode*";
    var groups = null;
    if (classname == undefined && method == undefined) {
        console.log("please enter classname or method");
        return groups;
    }
    if (!classname) {
        classname = "*";
    }
    if (!method) {
        method = "*";
    }
    var filterPattern = classname + "!" + method;
    Java.performNow(function () {
        groups = Java.enumerateMethods(filterPattern);
    });
    return groups;
}

function findClasses(classnameFilter) {
    var classList = [];
    var groups = query(classnameFilter);
    if (groups != "" && groups != null) {
        for (var group of groups) {
            var classes = group["classes"];
            for (var cls of classes) {
                var classname = cls["name"];
                console.log("find classname=", classname);
                classList.push(classname);
            }
        }
        console.log("search finished and found " + classList.length + " class");
    } else {
        console.log("search finished and found 0 class");
    }
    return classList;
}

function findMethods(classnameFilter, methodFilter) {
    var methodList = [];
    var groups = query(classnameFilter, methodFilter);
    if (groups != "" && groups != null) {
        for (var group of groups) {
            var classes = group["classes"];
            for (var cls of classes) {
                var classname = cls["name"];
                var methods = cls["methods"];
                console.log("find method=", classname + "." + method);
                for (var method of methods) {
                    methodList.push(classname + "." + method);
                }
            }
        }
        console.log("search finished and found " + methodList.length + " method");
    } else {
        console.log("search finished and found 0 method");
    }
    return methodList;
}

function traceAllMethod(classnameFilter, methodFilter, overloadFilter) {
    /*
        traceALlMethod("*.Base64")  // trace all class match Base64
        traceAllMethod("","encode","[B,int") // trace all class and method equals encode and overload equals [B,int
        traceAllMethod("*Base64*","*encode","[B,int") // trace  class match Base64 and method match encode and overload equals [B,int
    */
    var methods = findMethods(classnameFilter, methodFilter);
    for (var method of methods) {
        traceOneMethod(method, overloadFilter);
    }
}

function traceOneMethod(fullMethodName, overloadFilter) {
    /*
        traceOneMethod("java.net.URL.$init") // trace all method of $init
        traceOneMethod("java.net.URL.$init","java.lang.String") 
        traceOneMethod("java.net.URL.$init","java.net.URL,java.lang.String")
    */
    var split_length = fullMethodName.split(".").length;
    var method = fullMethodName.split(".")[split_length - 1];
    var classname = fullMethodName.slice(0, fullMethodName.length - method.length - 1); // -1是为了去掉那个点
    // console.log("classname=" + classname + " method=" + method);
    Java.performNow(function () {
        try {
            var canUse = checkClassCanUse(classname);
            if (!canUse) {
                console.log("java.lang.ClassNotFoundException,maybe not loaded:classname=" + classname);
                return;
            }
            var tmpClass = Java.use(classname);
            tmpClass[method].overloads.forEach(function (m) {
                var argumentTypes = m.argumentTypes;
                var parameterStrArray = [];
                for (var tmpArg of argumentTypes) {
                    parameterStrArray.push(tmpArg["className"]);
                }
                if (!overloadFilter) {
                    console.log("hooking " + classname + "." + method + "(" + parameterStrArray.join(",") + ")");
                    m.implementation = function () {
                        var retval = m.apply(this, arguments);
                        print_equals(100, "=");
                        console.log("[ThreadId:" + Process.getCurrentThreadId() + "]" + "called " + classname + "." + method + "(" + parameterStrArray.join(",") + ")");
                        for (var i = 0; i < arguments.length; i++) {
                            console.log("arg[" + i + "]=" + arguments[i]);
                        }
                        // console.log(classname+"."+method+"("+parameterStrArray.join(",")+")"+"->retval=",retval)
                        console.log("retval=", retval);
                        print_stackTrace();
                        return retval;
                    };
                } else if (overloadFilter == parameterStrArray.join(",")) {
                    console.log("hooking " + classname + "." + method + "(" + parameterStrArray.join(",") + ")");
                    m.implementation = function () {
                        var retval = m.apply(this, arguments);
                        print_equals(100, "=");
                        console.log("[ThreadId:" + Process.getCurrentThreadId() + "]" + "called " + classname + "." + method + "(" + parameterStrArray.join(",") + ")");
                        for (var i = 0; i < arguments.length; i++) {
                            console.log("arg[" + i + "]=" + arguments[i]);
                        }
                        // console.log(classname+"."+method+"("+parameterStrArray.join(",")+")"+"->retval=",retval)
                        console.log("retval=", retval);
                        print_stackTrace();
                        return retval;
                    };
                } else {
                    return;
                }
            });
        } catch (e) {
            console.log(e);
            console.log("error classname=" + classname + " method=" + method);
        }
    });
}
/*
from hanbing
https://github.com/hanbinglengyue
*/
function hookThread() {
    Java.perform(function () {
        var ThreadClass = Java.use("java.lang.Thread");
        ThreadClass.init2.implementation = function (arg0) {
            var target = this.target.value;
            if (target != null) {
                //通过直接实现Runnagle接口run来创建新线程
                console.log("go into new Thread.init2->Runnable class:" + target.$className);
                print_stackTrace();
            } else {
                //通过继承Thread类并覆写run函数来创建新线程
                console.log("go into extends Thread.init2->Runnable class:" + this.$className);
                print_stackTrace();
                var threadClassname = this.$className;
                var ChindThreadClass = Java.use(threadClassname);
                ChindThreadClass.run.implementation = function () {
                    console.log("go into " + threadClassname + ".run");
                    print_stackTrace();
                    var result = this.run();
                    return result;
                };
            }
            var result = this.init2(arg0);
            return result;
        };
        ThreadClass.run.implementation = function () {
            var target = this.target.value;
            if (target != null) {
                console.log("go into new Thread.run->Runnable class:" + target.$className);
                print_stackTrace();
            }
            var reuslt = this.run();
            return reuslt;
        };
    });
}
/*
from imyang
https://github.com/lasting-yang
*/
function hook_RegisterNatives_new() {
    var addrRegisterNatives = ptr(DebugSymbol.fromName("_ZN3art3JNI15RegisterNativesEP7_JNIEnvP7_jclassPK15JNINativeMethodi").toString().split(" ")[0]);
    if (addrRegisterNatives) {
        Interceptor.attach(addrRegisterNatives, {
            onEnter: function (args) {
                print_equals(100, "=");
                console.log("[RegisterNatives] method_count:", args[3]);
                var env = args[0];
                var java_class = args[1];
                // var class_name = env.getClassName(java_class)
                var class_name = Java.vm.getEnv().getClassName(java_class);
                var methods_ptr = ptr(args[2]);
                var method_count = parseInt(args[3]);
                for (var i = 0; i < method_count; i++) {
                    var name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                    var sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                    var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));
                    var name = Memory.readCString(name_ptr);
                    var sig = Memory.readCString(sig_ptr);
                    var find_module = Process.findModuleByAddress(fnPtr_ptr);
                    console.log(
                        "[RegisterNatives] java_class:",
                        class_name,
                        "name:",
                        name,
                        "sig:",
                        sig,
                        "fnPtr:",
                        fnPtr_ptr,
                        "module_name:",
                        find_module.name,
                        "module_base:",
                        find_module.base,
                        "offset:",
                        ptr(fnPtr_ptr).sub(find_module.base)
                    );
                }
            },
            onLeave: function (retval) {},
        });
    }
}

function findAbstractImpl_decrypted(classnameFilter) {
    Java.performNow(function () {
        var Modifier = Java.use("java.lang.reflect.Modifier");
        var classes = findClasses(classnameFilter);
        for (var classname of classes) {
            var isAbstract = Modifier.isAbstract(Java.use(classname).class.getModifiers());
            console.log("classname=", classname, " isAbstract?=" + isAbstract);
            if (isAbstract == false) {
                console.log("make sure the class of [" + classname + "] is AbstractClass");
                continue;
            }
            var allMethods = Java.use(classname).class.getMethods();
            for (var tmpMethod of allMethods) {
                var tmpSpilt = tmpMethod.toString().split("(")[0].split(" ");
                var tmpMethodName = tmpSpilt[(0, tmpSpilt.length - 1)];
                var tmpMethodNameSplit = tmpMethodName.split(".");
                var tmpClassname = tmpMethodNameSplit.slice(0, tmpMethodNameSplit.length - 1).join(".");
                var isAbstract2 = Modifier.isAbstract(Java.use(tmpClassname).class.getModifiers());
                var tmpClassnameSuper = Java.use(tmpClassname).class.getSuperclass();
                if (isAbstract2 == false && tmpClassnameSuper != null && tmpClassnameSuper.getName() == classname) {
                    console.log("found AbstractClass[" + classname + "]' Impl is " + tmpClassnameSuper);
                } else {
                    if (tmpClassnameSuper != null) {
                        // console.log("tmpClassnameSuper.getName()=", tmpClassnameSuper.getName(), " classname=", classname)
                    }
                }
            }
        }
    });
}

function checkClassCanUse(classname) {
    var canUse = true;
    Java.performNow(function () {
        var currentClass = Java.use("java.lang.Class").forName(classname);
        if (currentClass.toString().indexOf("java.lang.ClassNotFoundException") != -1) {
            canUse = false;
            console.log("ClassNotFoundException =>  " + classname);
        }
    });
    return canUse;
}

function findAbstractImpl(classnameFilter) {
    Java.performNow(function () {
        var Modifier = Java.use("java.lang.reflect.Modifier");
        var classes = findClasses(classnameFilter);
        for (var classname of classes) {
            print_equals(100, "=");
            var canUse_ = checkClassCanUse(classname);
            if (!canUse_) continue;
            var isAbstract = Modifier.isAbstract(Java.use(classname).class.getModifiers());
            console.log("classname=", classname, " isAbstract?=" + isAbstract);
            if (isAbstract == false) {
                // console.log("your input class [" + classname + "] is not AbstractClass");
                continue;
            }
            var allClasses = findClasses("");
            // return 0;
            try {
                for (var tmpClassname of allClasses) {
                    // var canUse = Java.use("java.lang.Class").forName(tmpClassname).toString().indexOf("java.lang.ClassNotFoundException") == -1;
                    var canUse = checkClassCanUse(tmpClassname);
                    if (!canUse) continue;
                    var tmpClassnameClass = Java.use(tmpClassname);
                    if (tmpClassnameClass == null) continue;
                    var isAbstract2 = Modifier.isAbstract(tmpClassnameClass.class.getModifiers());
                    if (isAbstract2 == true) continue;
                    var tmpClassnameSuper = tmpClassnameClass.class.getSuperclass();
                    if (tmpClassnameSuper == null) continue;
                    // console.log("classname=", tmpClassname, " isAbstract?=" + isAbstract2);
                    if (tmpClassnameSuper.getName() == classname) {
                        console.log("found AbstractClass[" + classname + "] Impl is [" + tmpClassnameClass.class.getName() + "]");
                    }
                }
            } catch (e) {
                console.log(e, "hello");
            }
        }
    });
}

function help() {
    print_equals(100, "=");
    console.log('find("","") => will find all classes and all methods');
    console.log('find("*Base64*","") => will find all classes who matches Base64 and all methods');
    console.log('find("","decode") => will find all classes  and all methods who equals decode');
    print_equals(100, "=");
    console.log('traceOneMethod("javax.crypto.Cipher.doFinal") => trace the method with all overloads');
    console.log('traceOneMethod("javax.crypto.Cipher.doFinal","[B") => trace the method with the overloads matches [B');
    print_equals(100, "=");
    console.log('traceAllMethod("*http*") => trace all classes who match http and all the methods');
    console.log('traceAllMethod("*http*","$init") => trace all classes who match http and all the methods equals $init');
    console.log('traceAllMethod("*http*","$init","[B") => trace all classes who match http and all the methods equals get');
    print_equals(100, "=");
    console.log('findAbstractImpl("java.net.HttpURLConnection") => find the impl of class');
}

// use this function first
function find(classname, method) {
    /*
        find("*.Cipher") // find all classes endswith .Cipher
        find("","doFinal") // find all methods equal doFinal
        find("*Base64*","*encode*") // find all classes match Base64 and methods match encode
    */
    var filterPattern = "*Base64*!*encode*";
    if (classname == undefined && method == undefined) {
        console.log('maybe you can input find("","") find all classes and all methods');
        return;
    }
    if (!classname) {
        classname = "*";
    }
    if (!method) {
        method = "*";
    }

    var filterPattern = classname + "!" + method;
    Java.performNow(function () {
        const groups = Java.enumerateMethods(filterPattern);
        if (groups != "") {
            for (var group of groups) {
                var classes = group["classes"];
                for (var cls of classes) {
                    var classname = cls["name"];
                    var methods = cls["methods"];
                    print_equals(100, "=");
                    console.log("found class => " + classname);
                    for (var method of methods) {
                        console.log("found method => " + classname + "." + method);
                    }
                    console.log("found " + methods.length + " methods");
                }
            }
            console.log("search finished");
        } else {
            console.log("search finished and found 0 method");
        }
    });
}

function sopath(func) {
    console.log(DebugSymbol.fromName(func));
}

function generateHookCode(classnameFilter, methodFilter, overloadFilter) {
    var methods = findMethods(classnameFilter, methodFilter, overloadFilter);
    for (var method of methods) {
        console.log(method);
    }
}

function hook_java() {
    Java.perform(function () {
        // for test
        Java.use("android.util.Base64").encodeToString.overload("[B", "int").implementation = function (bArr, flag) {
            var result = this.encodeToString(bArr, flag);
            // console.log("android.util.Base64.encodeToString->",result)
            return result;
        };

        // var result = Java.use("java.lang.Class").forName("androidx.savedstate.SavedStateRegistryOwner");
        // console.log("reflection => ", result);

        var result2 = Java.use("androidx.savedstate.SavedStateRegistryOwner");
        console.log("Java.use =>", result2);
    });
}

function hook_native() {}

function main() {
    // frida -U -f com.sankuai.meituan -l lingzhiyi-hook-tools20210317.js --no-pause -o out.log
    // frida -U -f com.sankuai.meituan -l hook_RegisterNatives.js --no-pause -o out.log
    // frida -UF -l lingzhiyi-hook-tools20210317.js -o out.log
    // frida -UF -l lingzhiyi-hook-tools20210317.js > out.log
    // objection -g packageName explore
    // objection -g packageName explore --startup-command "android hooking search class socket"
    // objection -g packageName explore -c file.txt
    // before_hook();
    // console.log("call help()");
    // help();
    // hookThread();
    hook_java();
    hook_native();
    // hook_RegisterNatives_new()
}
setImmediate(main);
