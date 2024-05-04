
import json
import os
import random
import requests
import time
from mutagen.mp3 import MP3


class musicInfo:
    def __init__(self) -> None:
        musicJsonInfo='{"name": "name","id": 0,"ar": [],"al": {"id": 0,"name": ""},"dt": 0}'
        self.pyObjInfo=json.loads(musicJsonInfo)
        
    def updateInfo(self,name,id,dt):
        """
        创建一个符合格式的歌曲信息py对象
        name:歌曲标题
        id:歌曲id
        dt:歌曲时长
        返回一个歌曲信息的py对象
        """
        self.pyObjInfo['name']=name
        self.pyObjInfo['id']=id
        self.pyObjInfo['dt']=dt
        return self.pyObjInfo.copy()        


class musicInfoList:
    def __init__(self) -> None:
        with open("FileMgs/music_info/555.json",encoding="utf-8") as jsonFile:
           self.list=json.loads(jsonFile.read())

    def songs(self,ids):
        """
        获取额外歌曲信息
        ids:歌曲id列表
        返回对应id列表的歌曲信息py对象
        """
        time.sleep(random.randint(5,8))
        headers = {
            "Host": "music.163.com",
            "Origin": "http://music.163.com",
            "Referer": "http://music.163.com/",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": " ".join([
                "Mozilla/5.0 (Windows NT 6.1; Win64; x64)",
                "AppleWebKit/537.36 (KHTML, like Gecko)",
                "Chrome/81.0.4044.138",
                "Safari/537.36"
            ])
        }
        url = "http://music.163.com/api/song/detail/?ids=" + str(ids)
        r = requests.get(url,headers=headers)
        return json.loads(r.text)


    def updateInfo(self,musicInfo):
        """
        更新单个歌曲信息到555.json里的曲目
        musicInfo:歌曲信息的py对象
        """
        print('开始更新(单个)555.json')
        self.list['playlist']['tracks'].append(musicInfo)
        print(json.dumps(self.list,ensure_ascii=False))

    def updateInfoList(self,musicInfo):
        """
        更新歌曲信息列表到555.json里的曲目
        musicInfo:歌曲信息的py对象
        """
        print('开始更新555.json')
        self.list['playlist']['tracks'].extend(musicInfo)
        print(json.dumps(self.list,ensure_ascii=False))
        
    def insertExtraTracksInfo(self):
        """
        插入额外的歌曲信息列表到tracks里
        """
        print('开始插入额外列表...')
        # count=self.list["playlist"]["trackCount"]
        size=len(self.list["playlist"]["tracks"])
        trackIds=self.list["playlist"]["trackIds"]
        idList=[]

        tmpList=[]
        for i in trackIds[size:]:
            tmpList.append(i['id'])
            if len(tmpList)==20:
                r=self.songs(tmpList)
                if r['code']==200:
                    idList.extend(r['songs'])
                    tmpList=[]
                else:
                    print('返回数据错误',r)

        #插入最后部分不足20的列表
        if len(tmpList)>0:
            r=self.songs(tmpList)
            if r['code']==200:
                idList.extend(r['songs'])
        else:
            print('返回数据错误',r)
            
        self.list['playlist']['tracks'].extend(idList)
        # print(json.dumps(self.list,ensure_ascii=False))  

    def delSongs(self,infoList):
        for id in infoList:
            for i in range(len(self.list['playlist']['tracks'])):
                if self.list['playlist']['tracks'][i]['id'] == int(id):
                    del self.list['playlist']['tracks'][i]['id']

    def saveJsonFile(self):
        """
        保存曲目到555.json
        """
        print('保存文件555.json')
        with open("FileMgs/music_info/555.json", "w",encoding="utf-8") as jsonFile:
            jsonFile.write(json.dumps(self.list,ensure_ascii=False))


class localMusicInfo():
    def __init__(self) -> None:
        self.info = musicInfo()

    def getInfoList(self):
        """
        获取FileMgs/music目录下的歌曲信息
        返回一个歌曲信息的py对象列表
        """
        musicInfoList=[]
        for i in os.listdir("FileMgs/music"):
            name=i
            id=20240400000000|random.randint(10000000, 99999999)
            dt=int(MP3('FileMgs/music/{0}'.format(i)).info.length*1000)
            musicInfoList.append(self.info.updateInfo(name,id,dt))
        return musicInfoList.copy()
    
    def saveInfoList(self,list):
        """
        保存本地歌曲信息到FileMgs/music目录下的localMusicList.json
        """
        with open("FileMgs/music_info/localMusicList.json", "w",encoding="utf-8") as jsonFile:
            jsonFile.write(json.dumps(list,ensure_ascii=False))


if __name__ == "__main__":

    lIL=localMusicInfo()
    mIL=musicInfoList()

    localInfoList=lIL.getInfoList()
    mIL.insertExtraTracksInfo()
    mIL.updateInfoList(localInfoList)

    mIL.saveJsonFile()
    lIL.saveInfoList(localInfoList)
