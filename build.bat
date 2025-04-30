@echo off
echo Installing dependencies...
cmd /c npm install

echo Generating RJTG.sct...
node generate.js

echo Done.
