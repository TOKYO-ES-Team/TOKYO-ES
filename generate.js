const fs = require('fs');
const licenseText = require('./licenses.js');

fs.writeFileSync('TEST.sct', licenseText, 'utf8');
console.log('RJTG.sct 파일이 생성되었습니다.');
