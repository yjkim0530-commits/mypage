@echo off
chcp 65001 > nul
title 깃허브로 내 소개페이지 올리기 (Git Push)
echo ======================================================
echo   KIMNIVERSE 마이페이지를 깃허브(GitHub)로 올립니다.
echo ======================================================
echo.
cd /d "C:\Users\kated\Desktop\Antigravity\MYPAGE"
set "PATH=C:\Program Files\Git\cmd;%PATH%"

echo [1/2] 깃허브 연결 확인 중...
git remote -v
echo.
echo [2/2] 깃허브로 업로드(Push) 진행 중...
echo * 만약 브라우저에 GitHub 로그인 창이 뜨면 로그인해 주세요!
echo.
git push -u origin main

echo.
echo ======================================================
echo   작업이 완료되었습니다. 창을 닫으셔도 됩니다.
echo ======================================================
pause
