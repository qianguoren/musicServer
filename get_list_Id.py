
import base64
import hashlib
import random
import urllib.parse
import requests
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



request_headers = {
    "Host": "music.163.com",
    "Origin": "http://music.163.com",
    "Referer": "http://music.163.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie":"NMTID=00Oy2ZXIcoC2--GYkEblApgqB2d8poAAAGPBhbIdg; _iuqxldmzr_=32; _ntes_nnid=2359dd008e25a231541aa7672cf429a5,1713794107867; _ntes_nuid=2359dd008e25a231541aa7672cf429a5; WEVNSM=1.0.0; WNMCID=batzfl.1713794108138.01.0; WM_TID=bbJSoI9AAuFABFEAFEeEuwEtR3jiNEii; sDeviceId=YD-hljbR%2BmllitAQlVFRFKA7kQz5fZAob1k; ntes_utid=tid._.HwyMttxbzCxBE1FVQFPQ%252BxUpVjnzdZT2._.0; __snaker__id=TodBAvQR7clUZMmn; ntes_kaola_ad=1; MUSIC_U=00F87FEF600C9938AAF6E32FCA9D35722D397E7F3E2C17CFF3B41F58FF483F495B66C472A63FB8EAEE0355641C382C0C4051E2CAF734D261E6DC56B223EE1AAD4CD856B12AB6E18E72BDEEDBF919787136A365AF3CB14C8EE4666D91D253ED8FECA95E7323F12431430E16BD9E263497AB2D9BB547E41C61A8A95A23E7E22CA26B0505A133A36E7015B719CBCD107907971E31291A00589C6A9E5532D9D5D40C4BD97ADD16E414775E06B221E3EFFE4F3DDC4A5EEDE1ACFD7C2A0BC5C1169489D68110DC0E087D795E41A28D789F46D08EF6927738AB6A2C70E3CC0D40993EEACC2740D81D6746F5FD24AEC7B37137A1D620D8839D37F97E13B29565D85A4C0303E391A1571C886859113E91DD8E65302A290CED84E0FE596E0329CC4B252E235FD15B09D5227CF9B0D73C81540E1F2C8F47B4CE9FDE08EB7087D302D2665619621D186E3CDA475E39CF8C27199B612F3729EAE27063A73D80C1652EF22B465FD2; __csrf=76623c23896e833dcc44acab9b6a73a7; playerid=13883257; gdxidpyhxdE=t%5Cl1bfCW0iqxejJi6%5ChqsAYRitMMW%2BAN1A68QK4dCE27Bneap96hOtR7T9t7riCjAa%2BwR%2BBB2W4PyoWAa%2BUyoeXjJrpvuhTw%2BaftdvUNgTDXWDBWaZOTGUbToQ2djswX68TR9tpDdaEvVayeafgvt%5ClirDqqECjpWZ6urtnrDHpDjW1S%3A1714226122890; WM_NI=x%2Bv257G9vKL8qWkE5vM%2B4enifjKAzghltdVIHNqPjrN1iZ6mAMV33dKAUgePYpFwtjG4xHfHYl9h0IG7u8JFYhaFGxxptSkLWD4RK9VPmmf4U6YwAL0vS0w5%2BKR5%2Fggga08%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee86e23db7ec8482b460f3b08bb6d55e979f8ab1c43da5a985bbbc6294b90088fc2af0fea7c3b92abcf5bad3b83d85e7baaccf34b389a5a6b87e8ff5fc86ed63a6b685a2f96dacb4bc85d5438c92bfb1e97a8eefa7bbb56783939ad4b270899f9b88e85c9bb08a98f76285ecb8a9e5449bb4f789b34385e9bbd9c94e9bb8afa7c674bcb0bcb4ea48959cfcb3ca339690a38ee54097ea9798c448f4aa9dd1f63fe9959ed6ae6da5b9afd1bb37e2a3; JSESSIONID-WYYY=vkY8cC6nD%2FD3mGZqAnhnNVZfrH2TVl1nvW39i0XIdEk9K8vXa209p80kwk%5Cx6ywcso5%5C4TdnslkMtOsVelkKyjsd%5C%2BfCaxGVu%2BrMyJN7Op8B543%2BRZaIwQ35q5XI7bqwaUoAOfmpuFW3a1Cw%2BUQIXY%2FKjhchO37cq%2FTETAImMv06ubBJ%3A1714318216923",
    "User-Agent": " ".join([
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64)",
        "AppleWebKit/537.36 (KHTML, like Gecko)",
        "Chrome/81.0.4044.138",
        "Safari/537.36"
    ])
}

listId=input()

url= "http://music.163.com/weapi/v3/playlist/detail?csrf_token="
param = "{\"id\":" + listId + ",\"csrf_token\":\"\"}"
encrypt = EncryptUtils.encrypted_param(param)

json_list=requests.post(url=url,headers=request_headers,data=encrypt).text
open("FileMgs/music_info/555.json","w",encoding="utf-8").write(json_list)

