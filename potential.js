const fs = require('fs');
const axios = require('axios');
const path = require('path');

const folder = '_Potentials';

const url = process.argv[2];
if (!url) {
    console.log('No url supplied');
    process.exit(0);
}

const urlSegments = url.split('/');
const fileName = urlSegments[urlSegments.length-1];
const filePath = path.join(folder, fileName);

axios.get(url)
.then(response => {
    fs.writeFileSync(filePath, response.data);
})
.catch(err => console.error('Error downloading', err.message));