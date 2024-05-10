// This file will find the songs and download it into the local storage. You have some keen eyes if you're checking this file  o.o

import fs from 'fs';
import ytdl from 'ytdl-core';
import { spawn } from 'child_process';

export const downloader = async (videoId,url) => {
    return new Promise((resolve, reject) => {
        try {
            const downloadPath = `downloads/${videoId}.mp3`;

            const moosic = ytdl(url, { filter: 'audioonly' }); //creating a Readable Stream of the requested Music 
            moosic.on("error", error => {
                console.error("Error downloading audio:", error);
            });

            const ffmpegPath = 'D:/ffmpeg/bin/ffmpeg.exe'; // ffmpeg file path . 

            const ffmpegArgs = [
                '-f', 'webm', // setting input format as .webm
                '-i', '-', // Input from stdin
                '-codec:a', 'libmp3lame',
                '-q:a', '4', // '4' indicates the quality and the bitrate of the song (kbps). You can change it as per your requirements. Range ->  (1-9)
                '-y', 
                downloadPath 
            ];

            const ffmpegProcess = spawn(ffmpegPath, ffmpegArgs); //using command-line FFmpeg

            const outputStream = fs.createWriteStream(downloadPath);
            ffmpegProcess.stderr.pipe(process.stderr); // Pipe stderr to process stderr (Basically sending shit from Toilet to Manhole)  (This part literally made me cry)
            ffmpegProcess.stdout.pipe(outputStream);

            moosic.pipe(ffmpegProcess.stdin);

            ffmpegProcess.on('close', (code) => {
                if (code === 0) {
                    console.log(`Audio file saved successfully: ${downloadPath}`);
                    resolve();
                } else {
                    reject(new Error(`ffmpeg process exited with code ${code}`));
                }
            });

            ffmpegProcess.on('error', (error) => {
                console.error('ffmpeg process error:', error);
            });

            ffmpegProcess.on('exit', (code) => { // exit code
                if (code !== 0) {
                    console.error(`ffmpeg process exited with code ${code}`);
                }
            });

        } catch (error) {
            console.error('Error:', error);
        }
    });
};
