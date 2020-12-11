import base64
import hashlib

def base64_enc(s):
    return base64.b64encode(s.encode()).decode()

def md5_enc(s):
    return hashlib.md5(s.encode()).hexdigest()

if __name__ == "__main__":
    print(md5_enc('821346679'))