// This is just a Test file to test modules. Imagine opening this L-BOZO    XD

import fs from 'fs';
import path from 'path';
import ytdl from 'ytdl-core';
import yts from 'yt-search';

if(!fs.existsSync('./testing')){
    fs.mkdirSync('testing');
    console.log("Directory made");
}

for (let index = 0; index < 9; index++) {
    var stream = fs.createWriteStream(`testing/num${index+1}.txt`);
    stream.end();
}

const pushdir = './testing';
const cache = new Set();  
const files = fs.readdirSync(pushdir);
files.forEach((file) => {
    if (file.endsWith('.txt')) {
        const fileName = path.parse(file).name;
        cache.add(fileName);
    }
});

console.log(cache);