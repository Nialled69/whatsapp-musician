// This is our main file that will handle all the user interactions seamlessly. Simply type "npm start" in terminal to run. If you are still reading this, you might have some time to support my work. Donate through my UPI Id - `@dj.nialled.007.1d@okaxis` if you like this project. May god bless you <3

import path from 'path';
import fs from 'fs';
import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import axios from 'axios';
import ytsearch from 'yt-search';
import { downloader } from './song_finder.js';
import { videodownloader } from './video_downloader.js';
const { Client, MessageMedia , LocalAuth } = pkg;

//import text from './language';
//import { LANGUAGE } from './config';

//const downloadPath = path.resolve(__dirname, 'downloads');

if(!fs.existsSync('./Sessions')){ //Create a Sessions folder to keep track of the user-login so that re-login isn't necessary.
    fs.mkdirSync('Sessions');
}

if (!fs.existsSync('./downloads')) {
  fs.mkdirSync('./downloads');
}

const client = new Client({
  webVersionCache: { type: 'remote', remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html', },
  puppeteer: {
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', //Path to my google chrome. Your's might be different, check beforehand.
  },
  authStrategy : new LocalAuth({dataPath:'Sessions'}) 
})  

client.on('qr', qr => {
  qrcode.generate(qr, { small: true }); //QR code generation
});

client.on('ready', async () => {
  console.log("Successfully Connected Sire !");
});

client.initialize();

/*client.on('message_create', message => {
	console.log(message.body);
});*/


client.on('message_create', async (msg) => {
  if (msg.body === '!everyone') {  // "!everyone" will ping everyone in a group chat
      const chat = await msg.getChat();
      //console.log(chat);
      let text = '';
      let mentions = [];

      for (let participant of chat.participants) {
          mentions.push(`${participant.id.user}@c.us`);
          text += `@${participant.id.user} `;
      }
      //console.log(text)
      await chat.sendMessage(text, { mentions });
  }

  else if(msg.body === '!meme'){ // "!meme" will send a random meme by scraping latest memes from popular communities in Reddit
      console.log("sending meme!")
      const meme = await axios("https://meme-api.com/gimme") //Link to scrape memes from Reddit
      .then(res => res.data);
      const imgur = await MessageMedia.fromUrl(meme.url);
      await client.sendMessage(msg.from,imgur);
      console.log("Sent");
  }

  else if((msg.body).startsWith("!play")){ // "!play <song name>" will download a song and sent it to the user.
      const requested_music = (msg.body).slice(5,);
      const pushdir = './downloads/musics';
      if(!fs.existsSync(pushdir)){
        fs.mkdirSync(pushdir)
      }
      const song_cache = new Set();  //maintaining a Set to keep track of previously downloaded mp3 files to avoid re-download of the same file
      const files = fs.readdirSync(pushdir);
      files.forEach((file) => {
        if (file.endsWith('.mp3')) {
            const songName = path.parse(file).name;
            song_cache.add(songName);
        }
      });
      console.log("Downloading......",requested_music);
      const vids = await ytsearch(requested_music);
      const {videoId , url} = vids.videos[0]; // getting youtube URL of the requested song

      if(song_cache.has(videoId)){ //sending the song is already downloaded
        console.log("Song found in local storage. Sending Now............") 
        const media = MessageMedia.fromFilePath(`./downloads/musics/${videoId}.mp3`);
        await client.sendMessage(msg.from, media);
      }
      else{
        try{
            await downloader(videoId,url) //download the song with the youtube video URL
            //console.log("hulla");
            const media = MessageMedia.fromFilePath(`./downloads/musics/${videoId}.mp3`);
            await client.sendMessage(msg.from, media);
            console.log("Audio file sent !");
        } catch (error) {
            console.error('Error:', error);
        }
      }
    }

    else if((msg.body).startsWith("!stream")){
      const requested_vid = (msg.body).slice(8,);
      const videoss = await ytsearch(requested_vid);
      const {videoId , url} = videoss.videos[0];
      try{
        await videodownloader(videoId,url)
        const media = MessageMedia.fromFilePath(`./downloads/videos/${videoId}.mp4`);
        await client.sendMessage(msg.from, media);
        console.log("Video file sent !");
      } catch (error) {
        console.error('Error:', error);
      }
    }
});
