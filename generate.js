const fs = require('fs');
const licenseText = require('./licenses.js');
const defineText = require('./define.js');

const fullText = licenseText + defineText;

fs.writeFileSync('TEST.sct', fullText, 'utf8');
console.log('TEST.sct file is generated successfully!');
