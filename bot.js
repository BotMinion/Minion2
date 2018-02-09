const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('작동준비완료!');
  console.log('[BOT]MINION 실행중...');
  console.log('실행중...');
});


client.on('message', message => {
  if (message.content === 'fuck you minion') {
      message.reply('(╯°□°）╯︵ ┻━┻');


  }
});


client.login(process.env.BOT_TOKEN);
