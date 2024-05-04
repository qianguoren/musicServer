for %%i in (b\*.flac) do (
    C:\Users\PCOS\Downloads\Axiom.FFmpeg\ffmpeg\bin\ffmpeg.exe -i "%%i" -ab 320k -map_metadata -1 -id3v2_version 3 "a\%%~ni.mp3"
)
