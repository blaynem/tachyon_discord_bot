/*
  Basically this just checks if the message has 'mom is' or 'mother is' and replies.
*/
module.exports = msg => {
  const msgContent = msg.content.toLowerCase();
  const msgArray = msgContent.split(' ');
  if(msgArray.includes('mom') || msgArray.includes('mother') || msgArray.includes('mum')){
    if(msgContent.includes('mom is') || msgContent.includes('mother is') || msgContent.includes('mum is')) {
      msg.channel.send("You wouldn't be saying that if you saw her.");
    };
  };
};