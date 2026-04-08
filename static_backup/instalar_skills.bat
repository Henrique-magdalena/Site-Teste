@echo off
echo =======================================================
echo Instalando Habilidades do Stitch no seu Projeto Antigravity
echo =======================================================
echo.
echo Adicionando stitch-design...
call npx skills add google-labs-code/stitch-skills --skill stitch-design
echo.
echo Adicionando stitch-loop...
call npx skills add google-labs-code/stitch-skills --skill stitch-loop
echo.
echo Adicionando design-md...
call npx skills add google-labs-code/stitch-skills --skill design-md
echo.
echo Adicionando enhance-prompt...
call npx skills add google-labs-code/stitch-skills --skill enhance-prompt
echo.
echo Adicionando react:components...
call npx skills add google-labs-code/stitch-skills --skill react:components
echo.
echo Adicionando remotion...
call npx skills add google-labs-code/stitch-skills --skill remotion
echo.
echo Adicionando shadcn-ui...
call npx skills add google-labs-code/stitch-skills --skill shadcn-ui
echo.
echo =======================================================
echo Instalacao Concluida com Sucesso! 
echo O agente Antigravity agora pode usar essas skills.
echo =======================================================
pause
