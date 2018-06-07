/*
  Basically this just replies with a wave emoji if you tag the bot.
*/
const config = require("../config.json");

module.exports = msg => {
  const msgContent = msg.content;
  const usersMentioned = msg.mentions.users.array();
  usersMentioned.forEach(user => {
    if (user.id === config.botId){
      msg.channel.send(':wave:');
    }
  });
};