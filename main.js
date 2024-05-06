import pkg from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
const { Client, MessageMedia } = pkg;

//import text from './language';
//import { LANGUAGE } from './config';

const client = new Client({
  webVersionCache: 
  {
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2405.52-beta.html',
    type: 'remote' 
  },
  puppeteer: {
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  }
})
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log("Done nigger");
});

client.initialize();

client.on('message_create', message => {
	console.log(message.body);
});


client.on('message', async (msg) => {
  if (msg.body === '!everyone') {
      const chat = await msg.getChat();
      
      let text = '';
      let mentions = [];

      for (let participant of chat.participants) {
          mentions.push(`${participant.id.user}@c.us`);
          text += `@${participant.id.user} `;
      }

      await chat.sendMessage(text, { mentions });
  }
});

// export default client;  