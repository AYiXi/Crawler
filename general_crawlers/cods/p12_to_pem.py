import OpenSSL

def p12_to_pem(certname, pwd):
    pem_name = certname + ".pem"
    f_pem = open(pem_name, 'wb')
    p12file = certname + ".p12"
    p12 = OpenSSL.crypto.load_pkcs12(open(p12file, 'rb').read(), pwd)
    f_pem.write(OpenSSL.crypto.dump_privatekey(OpenSSL.crypto.FILETYPE_PEM, p12.get_privatekey()))
    f_pem.write(OpenSSL.crypto.dump_certificate(OpenSSL.crypto.FILETYPE_PEM, p12.get_certificate()))
    ca = p12.get_ca_certificates()

    if ca is not None:
        for cert in ca:
            f_pem.write(OpenSSL.crypto.dump_certificate(OpenSSL.crypto.FILETYPE_PEM, cert))
    f_pem.close()

    return pem_name

