
import os,json
from flask import Flask,send_file,abort,jsonify,request
from werkzeug.utils import secure_filename
from module.musicInfoModule import musicInfoList

mil=musicInfoList()

app = Flask(__name__)

html404="""
        <!doctype html>
        <html lang=en>
        <title>404 Not Found</title>
        <h1>Not Found</h1>
        <p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.</p>
        """

def idToFileName(id):
    with open("FileMgs/music_info/localMusicList.json",encoding="utf-8") as ListFile:
        MusicList=json.loads(ListFile.read())
    for i in MusicList:
        if i['id']==int(id):
            return i['name']

@app.route('/')
def hello_world():
    abort(404)

@app.route('/FileMgs/555.json')
def jsonFile():
    return send_file("./FileMgs/music_info/555.json")

@app.route('/FileMgs/<file_id>')
def FileMgs(file_id):
    file_name=idToFileName(file_id[:-4])
    return send_file("./FileMgs/music/"+file_name)

@app.route('/delSongs',methods=['POST'])
def delSongs():
    data = json.loads(request.data)
    songList=data['delId']
    mil.delSongs(songList)
    mil.saveJsonFile()
    # print(mil.list)
    return '{"state":"ok"}'

@app.route('/uploader',methods=['GET','POST'])
def uploader():
    if request.method == 'POST':
        f = request.files['file']
        print(request.files)
        f.save(os.path.join("FileMgs", secure_filename(f.filename)))
        return 'file uploaded successfully'
    else:
        return 'Can only post'

@app.errorhandler(Exception)
def handle_exception(e):
    print(e)
    return html404, 404

if __name__ == '__main__':

    app.run(host='0.0.0.0',port=25569)