# 🎵 Whatsapp musician 🎵
<p>A whatsapp bot to play music seamlessly , whether for your personal use or for friends.</p>

Simply type in  `!play`  and then the name of the song you want to play . Example - `!play Humble by Kendrick Lamar`

# How to use the Bot ? 🤖
<h2>1. Download the Requirements first. ⚓</h2>

* [Node.js](https://nodejs.org/en/download)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* Any Code Editors (I used VS code) [Download Visual Studio code](https://code.visualstudio.com/Download)
<h2>2. FFmpeg setup 🤡</h2>
After downloading the Ffmpeg latest version from <a href="https://www.gyan.dev/ffmpeg/builds/">here</a>

* Extract it in `D:\` and rename it to `ffmpeg` (or other disc drives of your choice)
<p>Set Ffmpeg in the Environment Variable (Here's how to do it in windows - ) (You can similarly do this for other OS)</p>

* Press `🪟+s` (windows key + s)  and type in `Environment Variables` and press `ENTER`
* Go to `Environment variables` and then click on `path` row of the "System Variables" section and click on `Edit...`
* click on `New` and type in `D:\ffmpeg\bin` this address and click on `OK` and `apply` and ffmpeg is all set
* Now that you've FFmpeg installed, verify that it's working by running the command
```cmd
ffmpeg -version
```
If it gives the version number then all good otherwise refer to [Sensei](https://chat.openai.com) for further help   :D

<h2>3. Cloning the Repository 🫦 </h2>

```cmd
git clone https://github.com/Nialled69/whatsapp-musician.git
```
```cmd
cd whatsapp_musician
```

<h2>4. Running the Bot 🥸</h2>

Make sure that your ffmpeg path is set at `D:\ffmpeg\bin` . If not, open the `song_finder.js` , go to line no. 17 and update the FFmpeg path.
After making sure of all the above factors, type in - 

```cmd
npm start
```

# Extra Features 🎃 
### Tag Everyone 🥊</h3>

Tag Everyone in the group chat with `!everyone` command . (Important when you need to announce something)
### Get Memes ⛓️ </h3>

Get unlimited memes with the command `!meme` , freshly scraped from the most popular communities on Reddit with the lastest Web-Scraping Technology . 

This might take some time. If you want very fast responses , then reduce the delay by clicking on this [link](https://www.google.com/search?q=wifi&oq=wifi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg80gEIMzI4N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8)

