function hook_RegisterNatives_new() {
    var addrRegisterNatives = ptr(DebugSymbol.fromName("_ZN3art3JNI15RegisterNativesEP7_JNIEnvP7_jclassPK15JNINativeMethodi").toString().split(" ")[0])
    if (addrRegisterNatives) {
        var addrGetStringUTFChars = ptr(DebugSymbol.fromName("_ZN3art3JNI17GetStringUTFCharsEP7_JNIEnvP8_jstringPh").toString().split(" ")[0]);
        var addrGetMethodID = ptr(DebugSymbol.fromName("_ZN3art3JNI11GetMethodIDEP7_JNIEnvP7_jclassPKcS6_").toString().split(" ")[0]);
        var addrAllocObject = ptr(DebugSymbol.fromName("_ZN3art3JNI11AllocObjectEP7_JNIEnvP7_jclass").toString().split(" ")[0]);
        var addrCallObjectMethod = ptr(DebugSymbol.fromName("_ZN3art3JNI16CallObjectMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz").toString().split(" ")[0]);
        var addrGetObjectClass = ptr(DebugSymbol.fromName("_ZN3art3JNI14GetObjectClassEP7_JNIEnvP8_jobject").toString().split(" ")[0]);
        var addrReleaseStringUTFChars = ptr(DebugSymbol.fromName("_ZN3art3JNI21ReleaseStringUTFCharsEP7_JNIEnvP8_jstringPKc").toString().split(" ")[0]);
        Interceptor.attach(addrRegisterNatives, {
            onEnter: function(args) {
                console.log("[RegisterNatives] method_count:", args[3]);
                var env = args[0];
                var java_class = args[1];
                var funcAllocObject = new NativeFunction(addrAllocObject, "pointer", ["pointer", "pointer"]);
                var funcGetMethodID = new NativeFunction(addrGetMethodID, "pointer", ["pointer", "pointer", "pointer", "pointer"]);
                var funcCallObjectMethod = new NativeFunction(addrCallObjectMethod, "pointer", ["pointer", "pointer", "pointer"]);
                var funcGetObjectClass = new NativeFunction(addrGetObjectClass, "pointer", ["pointer", "pointer"]);
                var funcGetStringUTFChars = new NativeFunction(addrGetStringUTFChars, "pointer", ["pointer", "pointer", "pointer"]);
                var funcReleaseStringUTFChars = new NativeFunction(addrReleaseStringUTFChars, "void", ["pointer", "pointer", "pointer"]);
                var clz_obj = funcAllocObject(env, java_class);
                var mid_getClass = funcGetMethodID(env, java_class, Memory.allocUtf8String("getClass"), Memory.allocUtf8String("()Ljava/lang/Class;"));
                var clz_obj2 = funcCallObjectMethod(env, clz_obj, mid_getClass);
                var cls = funcGetObjectClass(env, clz_obj2);
                var mid_getName = funcGetMethodID(env, cls, Memory.allocUtf8String("getName"), Memory.allocUtf8String("()Ljava/lang/String;"));
                var name_jstring = funcCallObjectMethod(env, clz_obj2, mid_getName);
                var name_pchar = funcGetStringUTFChars(env, name_jstring, ptr(0));
                var class_name = ptr(name_pchar).readCString();
                funcReleaseStringUTFChars(env, name_jstring, name_pchar);
                var methods_ptr = ptr(args[2]);
                var method_count = parseInt(args[3]);
                for (var i = 0; i < method_count; i++) {
                    var name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                    var sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                    var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));
                    var name = Memory.readCString(name_ptr);
                    var sig = Memory.readCString(sig_ptr);
                    var find_module = Process.findModuleByAddress(fnPtr_ptr);
                    console.log("[RegisterNatives] java_class:", class_name, "name:", name, "sig:", sig, "fnPtr:", fnPtr_ptr, "module_name:", find_module.name, "module_base:", find_module.base, "offset:", ptr(fnPtr_ptr).sub(find_module.base));
                }
            },
            onLeave: function(retval) {}
        });
    }
}

setImmediate(hook_RegisterNatives_new)