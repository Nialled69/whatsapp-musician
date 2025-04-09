# 🎵 Whatsapp musician 🎵
<p>A whatsapp bot to play music seamlessly , whether for your personal use or for friends.</p>

Simply type in  `!play`  and then the name of the song you want to play . Example - `!play Humble by Kendrick Lamar`

(or if you want to watch a music video) 

Type in  `!stream`  and then the name of the music-video you want to play . Example - `!stream Fuji Opener by Skrillex`

# How to use the Bot ? 🤖
<h2>1. Download the Requirements first. ⚓</h2>

* [Node.js](https://nodejs.org/en/download)
* [Git](https://git-scm.com/downloads)
* [yt-dlp](https://github.com/yt-dlp/yt-dlp)
* Any Code Editors (I used VS code) [Download Visual Studio code](https://code.visualstudio.com/Download)
<h2>2. yt-dlp setup 🤡</h2>
After downloading the yt-dlp latest version from <a href="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe">here</a>

* Move the `.exe` file in `C:\Windows\System32`

* Remember to give Adminstrator permissions before doing this. [Learn how](http://www.am-i-dumb.com/)

* Now that you have yt-dlp, verify that it's working by running the command
```cmd
yt-dlp --version
```
If it gives a recent date then all good otherwise refer to [Sensei](https://chat.openai.com) for further help   :D

<h2>3. Cloning the Repository 🫦 </h2>

```cmd
git clone https://github.com/Nialled69/whatsapp-musician.git
```
```cmd
cd whatsapp_musician
```
Run the below line to initiate a node project
```cmd
npm init
```

<h2>4. Downloading the Node Modules ☣️</h2>

type in `cd` in the terminal. If the path ends with `\whatsapp_musician` , then run the below line - 
```cmd
npm i
```

<h2>5. Running the Bot 🥸</h2>

After making sure of all the above factors including verifying the `yt-dlp` installation, type in the below code to compile the Typescript code into JS - 

```cmd
npx tsc
```

Now type in -

```cmd
node  dist/main.js
```

Scan the QR code in the terminal from your mobile whatsapp and it will start working. Make sure that your current whatsapp version supports **Multi Device Beta**

# Extra Features 🎃 
## Tag Everyone 🥊</h3>

Tag Everyone in the group chat with `!everyone` command . (Important when you need to announce something for everyone in the chat)
## Get Memes ⛓️ </h3>

Get unlimited memes with the command `!meme` , freshly scraped from the most popular communities on Reddit with the lastest Web-Scraping Technology . 

This might take some time. If you want very fast responses , then reduce the delay by clicking on this [link](https://www.google.com/search?q=wifi&oq=wifi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg80gEIMzI4N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8)

## Watch videos 📹 

Watch any video from youtube (music videos are mostly preferrable) directly in your whatsapp chat. 

Simply type in  `!stream`  and then the name of the music-video you want to play . Example - `!stream Enter Sandman by Metallica` and the video file wil be sent to the user.

Note - This takes a huge time since video size may vary and this feature greatly depends on your internet speed and bandwidth. If you want to fix this issue , click in [here](https://www.google.com/search?q=wifi&oq=wifi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg80gEIMzI4N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8)
