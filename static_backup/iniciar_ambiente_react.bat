@echo off
echo =========================================================
echo Criando o ambiente React + Shadcn + Remotion + Tailwind
echo =========================================================

echo Iniciando o projeto na pasta atual usando Vite React...
call npx -y create-vite@latest ./ --template react

echo.
echo Instalando dependencias essenciais do projeto...
call npm install

echo.
echo Instalando Tailwindcss...
call npm install -D tailwindcss postcss autoprefixer
call npx tailwindcss init -p

echo.
echo Inicializando o Shadcn UI (usando configuracoes padroes)...
call npx -y shadcn-ui@latest init -d

echo.
echo Instalando Remotion...
call npm i remotion @remotion/cli

echo =========================================================
echo Tudo configurado!
echo Use "npm run dev" para rodar o site no simulador.
echo =========================================================
pause
