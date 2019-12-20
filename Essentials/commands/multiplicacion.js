const Discord = require('discord.js');
module.exports = {
    name: 'multiplicacion',
    aliases: ['multiplicar'],
    execute: async (message, args) => {
      let n1 = parseInt(args[0]);
    let n2 = parseInt(args[1]);
    if(!n1 || !n2) return message.channel.send('Debes ingresar al menos 2 números (0 no es un número válido)');
    if(!args[2]) {
    let resultado = n1 * n2;
    
    const embed = new Discord.RichEmbed()
    .setTitle('Multiplicación')
    .addField('Ecuación:', +n1 + ' x ' + n2)
    .addField('Resultado:', +resultado)
    .setColor("RANDOM");
      message.channel.send(embed);
    } else if(!args[3]) {
      let n1 = parseInt(args[0]);
      let n2 = parseInt(args[1]);
      let n3 = parseInt(args[2]);
      
      let resultado = n1 * n2 * n3;
      
      const embed = new Discord.RichEmbed()
    .setTitle('Multiplicación')
    .addField('Ecuación:', +n1 + ' x ' + n2 + ' x ' + n3)
    .addField('Resultado:', +resultado)
    .setColor("RANDOM");
      message.channel.send(embed);
    } else if(!args[4] && args[3]) {
      let n1 = parseInt(args[0]);
      let n2 = parseInt(args[1]);
      let n3 = parseInt(args[2]);
      let n4 = parseInt(args[3]);
      
      let resultado = n1 * n2 * n3 * n4;
      
      const embed = new Discord.RichEmbed()
    .setTitle('Multiplicación')
    .addField('Ecuación:', +n1 + ' x ' + n2 + ' x ' + n3 + ' x ' + n4)
    .addField('Resultado:', +resultado)
    .setColor("RANDOM");
    message.channel.send(embed);
    } else if(args[4] && !args[5]) {
      let n1 = parseInt(args[0]);
      let n2 = parseInt(args[1]);
      let n3 = parseInt(args[2]);
      let n4 = parseInt(args[3]);
      let n5 = parseInt(args[4]);
      
      let resultado = n1 * n2 * n3 * n4 * n5;
      
      const embed = new Discord.RichEmbed()
    .setTitle('Multiplicación')
    .addField('Ecuación:', +n1 + ' x ' + n2 + ' x ' + n3 + ' x ' + n4 + ' x ' + n5)
    .addField('Resultado:', +resultado)
    .setColor("RANDOM");
    message.channel.send(embed);
    } else{
      message.channel.send('No se pueden hacer ecuaciones de más de 5 números');
    }
    },
};