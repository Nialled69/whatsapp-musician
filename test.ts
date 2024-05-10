// This is just a Test file to test modules. This doesn't contribute anything to the original project. Imagine opening this L-BOZO    XD

import fs from 'fs';
import path from 'path';
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import {spawn} from 'child_process';
import ffmpeg from 'fluent-ffmpeg';

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

/*try {
    const vids = await yts("Yoasabi Idol");
    const {videoId , url} = vids.videos[0];
    const downloadPath = `downloads/${videoId}.mp3`;

    const moosic = ytdl(url); 
    moosic.on("error", error => {
        console.error("Error downloading audio:", error);
    });

    const ffmpegPath = 'D:/ffmpeg/bin/ffmpeg.exe'; 

    const ffmpegArgs = [
        '-f', 'opus', 
        '-i', '-', 
        '-codec:a', 'libmp3lame',
        '-q:a', '1',
        '-y', 
        downloadPath 
    ];

    const ffmpegProcess = spawn(ffmpegPath, ffmpegArgs);

    const outputStream = fs.createWriteStream(downloadPath);
    ffmpegProcess.stderr.pipe(process.stderr); 
    ffmpegProcess.stdout.pipe(outputStream);

    moosic.pipe(ffmpegProcess.stdin);

    ffmpegProcess.on('close', (code) => {
        if (code === 0) {
            console.log(`Audio file saved successfully: ${downloadPath}`);
        } else {
        }
    });

    ffmpegProcess.on('error', (error) => {
        console.error('ffmpeg process error:', error);
    });

    ffmpegProcess.on('exit', (code) => {
        if (code !== 0) {
            console.error(`ffmpeg process exited with code ${code}`);
        }
    });

} catch (error) {
    console.error('Error:', error);
}*/