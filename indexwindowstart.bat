@echo off

:REDO
start C:\Users\syw\Desktop\abcdef\indexsTARTABC.html
timeout 3600
TASKKILL /IM iexplore.exe /t
goto :REDO