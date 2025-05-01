const fs = require('fs');
const licenseText = require('./licenses.js');
const defineText = require('./define.js');
const raw = fs.readFileSync('airports.json');
const airports = JSON.parse(raw);

const airportText = airports.map(airport => {
    return `${airport.ICAO} ${airport.FREQ} ${airport.LAT} ${airport.LOT} ${airport.AIRSPACE} ;- ${airport.NAME}`;
}).join('\n');

const fullText = licenseText + defineText + "\n[AIRPORT]\n" + airportText;

fs.writeFileSync('TEST.sct', fullText, 'utf8');
console.log('TEST.sct file is generated successfully!');
