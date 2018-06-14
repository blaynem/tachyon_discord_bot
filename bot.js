const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const botWavesBack = require('./bot-things/botWavesBack');
const momReply = require('./bot-things/momReply');
const questionMark = require('./bot-things/questionMark');
const weather = require('./bot-things/weather');

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log('Beep boop, powered on.');
});

client.on('message', msg => {
  if(msg.author.id !== config.botId) {
    botWavesBack(msg);
    momReply(msg);
    questionMark(msg, client);
    weather(msg, client);
  }
})

client.login(config.token);