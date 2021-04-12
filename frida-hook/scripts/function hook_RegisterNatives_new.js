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
