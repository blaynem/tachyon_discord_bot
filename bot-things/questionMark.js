/*
  Replies to 'question mark'
*/
module.exports = (msg, client) => {
  const whatThe = client.emojis.find("name", 'whatthe');
  const berateResponse = `
${whatThe}  ${whatThe}  ${whatThe} ${whatThe} ${whatThe} ${whatThe} ${whatThe}
${whatThe} QUESTION MARK ?!?! ${whatThe}
${whatThe}  ${whatThe}  ${whatThe} ${whatThe} ${whatThe} ${whatThe} ${whatThe}
`

  const msgContent = msg.content.toLowerCase();
  const question = 'question mark';
  const questionMark = 'questionmark';

  if(msgContent.includes(question) ||
    msgContent.includes(questionMark) ||
    msgContent.includes('???')) {
    msg.channel.send(berateResponse);
  }
};