const fs = require('fs');
// const inputFile = 'Rad2Theta.xrd';
const inputFile = 'xrd.hist.xrd';
const inputNames = inputFile.split('.');
const outputFile = `${inputNames.splice(0, inputNames.length-1).join('.')}.output.xrd`;

fs.writeFileSync(outputFile, '');
fs.readFileSync(inputFile).toString()
.split('\n')
.filter(line => Boolean(line) && !line.startsWith('#'))
.map(line => line.split(' ')).forEach((line, i, lines) => {
    fs.appendFileSync(outputFile, `${line[1]}\t${Number(line[2]).toFixed(4)}${i < lines.length - 1 ? '\n' : ''}`);
});