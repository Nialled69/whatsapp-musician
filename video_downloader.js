

import fs from 'fs';
import ytdl from 'ytdl-core';
import { spawn } from 'child_process';
import path from 'path';

export const videodownloader = async (videoId,url) => {
    return new Promise((resolve, reject) => {
        const savepath = './downloads/videos';
        if(!fs.existsSync(savepath)){
            fs.mkdirSync(savepath);
        }
        const cache = new Set();  //maintaining a Set to keep track of previously downloaded mp3 files to avoid re-download of the same file
        const files = fs.readdirSync(savepath);
        files.forEach((file) => {
            if (file.endsWith('.mp4')) {
                const Name = path.parse(file).name;
                cache.add(Name);
            }
        });
        if(cache.has(videoId)){ 
            console.log("Video found in local storage. Sending Now............") 
            resolve()
        }
        else{    
            try {
                const downloadPath = `downloads/videos/${videoId}.mp4`;
                
                const video = ytdl(url,{quality:18}); 
                video.on("error", error => {
                    console.error("Error downloading video:", error);
                    reject(error);
                });
                const ffmpegPath = 'D:/ffmpeg/bin/ffmpeg.exe'; // ffmpeg file path . 
                const ffmpegArgs = [
                    '-i', '-',
                    '-c:v', 'copy', 
                    '-c:a', 'copy', 
                    '-f', 'mp4',
                    '-y', 
                    downloadPath
                ];
                const ffmpegProcess = spawn(ffmpegPath, ffmpegArgs);
                const outputStream = fs.createWriteStream(downloadPath);
                ffmpegProcess.stderr.pipe(process.stderr);
                ffmpegProcess.stdout.pipe(outputStream);
                video.pipe(ffmpegProcess.stdin);
                ffmpegProcess.on('close', (code) => {
                    if (code === 0) {
                        console.log(`Video file saved successfully: ${downloadPath}`);
                        resolve();
                    } else {
                        reject(new Error(`ffmpeg process exited with code ${code}`));
                    }
                });
                ffmpegProcess.on('error', (error) => {
                    console.error('ffmpeg process error:', error);
                    reject(error)
                });
                ffmpegProcess.on('exit', (code) => { 
                    if (code !== 0) {
                        console.error(`ffmpeg process exited with code ${code}`);
                    }
                });
            } catch (error) {
                console.error('Error:', error);
                reject(error);
            }
        }
    });
};