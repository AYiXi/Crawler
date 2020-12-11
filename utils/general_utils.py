def str_to_hex(s):
    return ''.join([hex(j).replace('0x', '\\x') for j in [ord(i) for i in s]])

# def str_to_unicode(s):
#     return ''.join([j.decode() for j in [i.encode('unicode_escape') for i in s]])

if __name__ == "__main__":
    ...
    # print(str_to_unicode(''))