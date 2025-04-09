// This file will find the songs and download it into the local storage. You have some keen eyes if you're checking this file  o.o

import fs from 'fs';
import ytdl from 'ytdl-core';
import { spawn } from 'child_process';

export const downloader = async (videoId:string,url:string) => {
    return new Promise<void>((resolve, reject) => {
        try {
            const downloadPath = `downloads/musics/${videoId}.mp3`;

            const ytDlp = spawn("yt-dlp", [
                url,
                "-f", "bestaudio",
                "-x", "--audio-format", "mp3",
                "--audio-quality", "128K",  //audio format capped at 128kbps for faster downloads
                "-o", downloadPath
            ]);
    
            ytDlp.stderr.on("data", (data) => console.error("Error:", data.toString()));
    
            ytDlp.on("close", (code) => {
                if (code === 0) {
                    console.log(`Audio conversion complete!`);
                    resolve();
                } else {
                    reject(new Error(`yt-dlp process exited with code ${code}`));
                }
            });

        } catch (error) {
            console.error('Error:', error);
        }
    });
};
