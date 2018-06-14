const axios = require('axios');
const Discord = require("discord.js");
/*
  Basically this just replies with a wave emoji if you tag the bot.
*/
const config = require("../config.json");
const weatherApiCall = (msgContent, client) => {
  // const client = new Discord.Client();
  // This one will remove the white space and '!weather' in order to search. Will have to come back since API doesn't allow state codes..
  // const city = msg.content.toLowerCase().trim().replace(/\s|!weather/g, "")
  const cityQuery = msgContent.split(/[\s,]+/)[1];

  const drunkEmoji = client.emojis.find("name", 'drunk');
  if (!cityQuery) return Promise.resolve(`${drunkEmoji}aRe u fuKinG dRuNk?!${drunkEmoji}aDD a CetY u dadGenerate.${drunkEmoji}`)

  const { weatherApiKey } = config;
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const imgUrl = (icon) => `http://openweathermap.org/img/w/${icon}.png`;

  return axios.get(`${baseUrl}?q=${cityQuery}&appid=${weatherApiKey}`)
  .then(res => {
    console.log(res.data)
    const { name, weather } = res.data;
    const { description, icon } = weather[0];

    const embed = new Discord.RichEmbed({
      title: name,
      description: `I'm sensing theres some sort of.. ${description}?`,
    })
    return embed.setImage(imgUrl(icon));
  })
  .catch(err => {
    console.log(err)
    return `Either you're retarded, or I am. But I'm a bot so.. Let's ask <@${config.creatorId}>`
  });
};


module.exports = (msg, client) => {
  const msgContent = msg.content;
  if (msgContent.includes('!weather')){
    msg.channel.send('Whats up my doggy? Lemme take a gander..')
    .then(botMsg => {
      weatherApiCall(msgContent, client)
      .then(res => {
        botMsg.edit(res)
      })
    })
  };
};