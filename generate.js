const fs = require('fs');
const licenseText = require('./licenses.js');
const defineText = require('./define.js');
const aptraw = fs.readFileSync('./airports.json');
const rwyraw = fs.readFileSync('./runways.json');
const airports = JSON.parse(aptraw);
const runways = JSON.parse(rwyraw);

const airportText = airports.map(airport => {
    return `${airport.ICAO} ${airport.FREQ} ${airport.LAT} ${airport.LOT} ${airport.AIRSPACE} ;- ${airport.NAME}`;
}).join('\n');

const runwayText = runways
    .sort((a, b) => a.ICAO.localeCompare(b.ICAO))
    .map(runway => {
        return `${runway.STARTRWY} ${runway.ENDRWY} ${runway.STARTHDG} ${runway.ENDHDG} ${runway.STARTLATON} ${runway.ENDLATON} ;- ${runway.ICAO}`;
    })
    .join('\n');


const fullText = licenseText + defineText + "\n\n[AIRPORT]\n" + airportText + "\n\n[RUNWAY]\n" + runwayText;

fs.writeFileSync('TEST.sct', fullText, 'utf8');
console.log('TEST.sct file is generated successfully!');
