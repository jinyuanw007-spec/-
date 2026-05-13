@echo off
chcp 65001 >nul
echo ========================================
echo          启动个人作品集网站
echo ========================================
cd /d "D:\34965\网站\个人作品集"
if not exist "package.json" (
    echo 错误：找不到 package.json 文件
    pause
    exit /b 1
)
echo 当前目录：%cd%
echo 正在启动开发服务器...
echo ----------------------------------------
npm run dev