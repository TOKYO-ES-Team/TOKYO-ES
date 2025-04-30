@echo off
echo Installing dependencies...
cmd /c npm install

echo Generating TEST.sct...
node generate.js

echo Done.
