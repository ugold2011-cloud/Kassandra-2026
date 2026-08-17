@echo off
setlocal EnableExtensions

title KASSANDRA-2026 - BACKUP TO KINGSTON

set "SOURCE=C:\Users\ugold\Documents\Kassandra-2026"
set "DEST_DRIVE=D:"

echo ================================================
echo       KASSANDRA-2026 AUTOMATIC BACKUP
echo ================================================
echo.

if not exist "%SOURCE%\" (
    echo ERROR: Project folder was not found:
    echo %SOURCE%
    echo.
    pause
    exit /b 1
)

if not exist "%DEST_DRIVE%\" (
    echo ERROR: KINGSTON drive was not found at %DEST_DRIVE%
    echo Connect KINGSTON and try again.
    echo.
    pause
    exit /b 1
)

for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm-ss"') do set "STAMP=%%I"

set "DEST=%DEST_DRIVE%\Kassandra-2026_Backup_%STAMP%"

if exist "%DEST%\" (
    echo ERROR: Backup folder already exists:
    echo %DEST%
    echo Nothing was overwritten.
    echo.
    pause
    exit /b 1
)

echo Source:
echo %SOURCE%
echo.
echo Destination:
echo %DEST%
echo.
echo Starting full backup...
echo.

robocopy "%SOURCE%" "%DEST%" /E /COPY:DAT /DCOPY:DAT /R:2 /W:2 /XJ

set "RC=%ERRORLEVEL%"

echo.
echo ================================================

if %RC% GTR 7 (
    echo BACKUP FAILED
    echo ROBOCOPY RESULT CODE: %RC%
    echo.
    echo Do NOT treat this backup as verified.
    echo Do NOT remove KINGSTON until the problem is checked.
    echo ================================================
    echo.
    pause
    exit /b %RC%
)

if not exist "%DEST%\docs\" (
    echo WARNING: COPY FINISHED BUT VERIFICATION FAILED
    echo The docs folder was not found in the backup.
    echo.
    echo Backup folder:
    echo %DEST%
    echo.
    echo Do NOT treat this backup as verified.
    echo ================================================
    echo.
    pause
    exit /b 1
)

dir /b "%DEST%\docs\SESSION_CHECKPOINT*.md" >nul 2>&1

if errorlevel 1 (
    echo WARNING: COPY FINISHED BUT VERIFICATION FAILED
    echo No SESSION_CHECKPOINT file was found inside the backup docs folder.
    echo.
    echo Backup folder:
    echo %DEST%
    echo.
    echo Do NOT treat this backup as verified.
    echo ================================================
    echo.
    pause
    exit /b 1
)

echo BACKUP COMPLETED SUCCESSFULLY
echo.
echo Backup folder:
echo %DEST%
echo.
echo Verification passed:
echo - ROBOCOPY completed without failure
echo - docs folder exists
echo - SESSION_CHECKPOINT file exists in backup
echo.
echo ROBOCOPY RESULT CODE: %RC%
echo ================================================
echo.
echo SAFE TO CLOSE THIS WINDOW.
echo.
pause

endlocal