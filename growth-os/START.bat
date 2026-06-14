@echo off
title Growth OS Server
echo.
echo  ================================================
echo   Growth OS ^| Starting local server...
echo  ================================================
echo.

:: Copy server script to no-space path
copy /Y "%~dp0server.cjs" "%LOCALAPPDATA%\growth-os-server.cjs" >nul 2>&1

:: Write the VBS launcher for true detached process
echo Dim o > "%TEMP%\start-gos.vbs"
echo Set o = CreateObject("WScript.Shell") >> "%TEMP%\start-gos.vbs"
echo o.Run """%LOCALAPPDATA%\ms-playwright-go\1.57.0\node.exe"" ""%LOCALAPPDATA%\growth-os-server.cjs""", 0, False >> "%TEMP%\start-gos.vbs"

:: Launch node invisibly
wscript "%TEMP%\start-gos.vbs"

:: Wait for server to start
timeout /t 4 /nobreak >nul

:: Open in default browser
echo  Opening http://localhost:3000 in your browser...
start "" "http://localhost:3000"

echo.
echo  Growth OS is running at http://localhost:3000
echo.
echo  Keep this window open to keep the server running.
echo  Press Ctrl+C or close this window to stop.
echo.
pause
