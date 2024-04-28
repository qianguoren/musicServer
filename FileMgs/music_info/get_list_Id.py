
import base64
import hashlib
import random
import urllib.parse
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Crypto.PublicKey import RSA
from Crypto.Util.number import bytes_to_long, long_to_bytes

class EncryptUtils:
    @staticmethod
    def encrypted_param(text):
        if text is None:
            return "params=null&encSecKey=null"
        modulus = int("00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7"
                      "b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280"
                      "104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932"
                      "575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b"
                      "3ece0462db0a22b8e7", 16)
        nonce = "0CoJUm6Qyw8W8jud"
        pub_key = int("010001", 16)
        sec_key = EncryptUtils.get_random_string()
        enc_text = EncryptUtils.aes_encrypt(EncryptUtils.aes_encrypt(text, nonce), sec_key)
        enc_sec_key = EncryptUtils.rsa_encrypt(sec_key, pub_key, modulus)
        return "params=" + urllib.parse.quote(enc_text) + "&encSecKey=" + urllib.parse.quote(enc_sec_key)

    @staticmethod
    def aes_encrypt(text, key):
        iv = b"0102030405060708"
        cipher = AES.new(key.encode(), AES.MODE_CBC, iv)
        padded_text = pad(text.encode(), AES.block_size)
        encrypted_text = cipher.encrypt(padded_text)
        return base64.b64encode(encrypted_text).decode()

    @staticmethod
    def rsa_encrypt(text, pub_key, modulus):
        text = text[::-1]
        val = bytes_to_long(text.encode())
        enc_text = pow(val, pub_key, modulus)
        return str(hex(enc_text))[2:].rjust(256, "0")

    @staticmethod
    def get_random_string():
        return ''.join(random.choices('0123456789abcdef', k=16))

# # Example usage:
# text_to_encrypt = "Your text here"
# encrypted_params = EncryptUtils.encrypted_param(text_to_encrypt)
# print(encrypted_params)



import requests

listId=input()

url= "http://music.163.com/weapi/v3/playlist/detail?"#csrf_token=
param = "{\"id\":" + listId + ",\"csrf_token\":\"\"}"
encrypt = EncryptUtils.encrypted_param(param)

json_list=requests.post(url=url+encrypt).text

open("test.json","w",encoding="utf-8").write(json_list)

