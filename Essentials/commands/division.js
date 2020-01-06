const Discord = require('discord.js');
module.exports = {
    name: 'division',
    aliases: ['divided-by', 'dividedby'],
    execute: async (message, args) => {
    let n1 = parseInt(args[0]);
    let n2 = parseInt(args[1]);
    if(!n1 || !n2) return message.channel.send('You must enter at least 2 numbers (0 is not a valid number)');
    if(!args[2]) {
    let resultado = n1 / n2;
    
    const embed = new Discord.RichEmbed()
    .setTitle('Division')
    .addField('Equation:', +n1 + ' ÷ ' + n2)
    .addField('Result:', +resultado)
    .setColor("RANDOM");
      message.channel.send(embed);
    } else if(!args[3]) {
      let n1 = parseInt(args[0]);
      let n2 = parseInt(args[1]);
      let n3 = parseInt(args[2]);
      
      let resultado = n1 / n2 / n3;
      
      const embed = new Discord.RichEmbed()
    .setTitle('Division')
    .addField('Equation:', +n1 + ' ÷ ' + n2 + ' ÷ ' + n3)
    .addField('Result:', +resultado)
    .setColor("RANDOM");
      message.channel.send(embed);
    } else if(!args[4] && args[3]) {
      let n1 = parseInt(args[0]);
      let n2 = parseInt(args[1]);
      let n3 = parseInt(args[2]);
      let n4 = parseInt(args[3]);
      
      let resultado = n1 / n2 / n3 / n4;
      
      const embed = new Discord.RichEmbed()
    .setTitle('Division')
    .addField('Equation:', +n1 + ' ÷ ' + n2 + ' ÷ ' + n3 + ' ÷ ' + n4)
    .addField('Result:', +resultado)
    .setColor("RANDOM");
    message.channel.send(embed);
    } else if(args[4] && !args[5]) {
      let n1 = parseInt(args[0]);
      let n2 = parseInt(args[1]);
      let n3 = parseInt(args[2]);
      let n4 = parseInt(args[3]);
      let n5 = parseInt(args[4]);
      
      let resultado = n1 / n2 / n3 / n4 / n5;
      
      const embed = new Discord.RichEmbed()
    .setTitle('Division')
    .addField('Equation:', +n1 + ' ÷ ' + n2 + ' ÷ ' + n3 + ' ÷ ' + n4 + ' ÷ ' + n5)
    .addField('Result:', +resultado)
    .setColor("RANDOM");
    message.channel.send(embed);
    } else{
      message.channel.send('You can\'t make equations of more than 5 numbers');
    }
    },
};