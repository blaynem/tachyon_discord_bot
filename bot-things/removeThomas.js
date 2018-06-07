module.exports = msg => {
  const waitTime = (Math.floor(Math.random() * 6) + 1) * 1000;
  const deleteThis = () => setTimeout(() => {
    msg.channel.send('Could you not.')
    msg.delete()
    .then(() => console.log('gonna delete'))
    .catch(console.error);
  }, waitTime)
  // Thomas James Arelis Carpenter
  if (msg.embeds.length <= 0) return;
  if(msg.embeds[0].title.toLowerCase().includes('thomas') || msg.embeds[0].description.toLowerCase().includes('thomas')){
    console.log('contains thomas')
    deleteThis();
    return;
  }
  if(msg.embeds[0].title.toLowerCase().includes('james') || msg.embeds[0].description.toLowerCase().includes('james')){
    console.log('contains james')
    deleteThis();
    return;
  }
  if(msg.embeds[0].title.toLowerCase().includes('arelis') || msg.embeds[0].description.toLowerCase().includes('arelis')){
    console.log('contains arelis')
    deleteThis();
    return;
  }
  if(msg.embeds[0].title.toLowerCase().includes('carpenter') || msg.embeds[0].description.toLowerCase().includes('carpenter')){
    console.log('contains carpenter')
    deleteThis();
    return;
  }
  if(msg.embeds[0].title.toLowerCase().includes('asmongold')
    || msg.embeds[0].description.toLowerCase().includes('asmongold')
    || msg.embeds[0].author.name.toLowerCase().includes('asmongold')){
    console.log('contains asmongold', waitTime)
    deleteThis();
    return;
  }
};
