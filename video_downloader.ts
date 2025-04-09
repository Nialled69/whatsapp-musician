// This file handles the logic to download videos and sent it to the user's chat. 
// It takes huge time because, you can understand right ? If you got good internet speed with good bandwidth, then you're all set.

import fs from 'fs';
import ytdl from 'ytdl-core';
import { spawn } from 'child_process';
import path from 'path';

export const videodownloader = async (videoId:string,url:string) => {

    return new Promise<void>((resolve, reject) => {
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
                const filename =`${videoId}.mp4`
                const downloadPath = path.join(__dirname,savepath,filename)
                
                const ytDlp = spawn("yt-dlp", [
                    url,
                    "-f", "bestvideo[height<=480]+bestaudio/best[height<=480]", // video format capped at 480p for faster downloads
                    "-o", downloadPath
                ]);
                
                ytDlp.stderr.on("data", (data) => console.error("Error:", data.toString()));
                
                ytDlp.on("close", (code) => {
                    if (code === 0) {
                        console.log(`Video file saved successfully: ${downloadPath}`);
                        resolve();
                    } else {
                        reject(new Error(`ffmpeg process exited with code ${code}`));
                    }
                });

                ytDlp.on('error', (error) => {
                    console.error('ffmpeg process error:', error);
                    reject(error)
                });

                ytDlp.on('exit', (code) => { 
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
