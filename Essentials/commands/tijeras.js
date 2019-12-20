const Discord = require('discord.js');
module.exports = {
    name: 'tijeras',
    aliases: ['tijera'],
    description: 'eliges tijera',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Piedra,Papel o Tijeras`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("Tijeras:", "Empate") ; break;
                 case 2: embed.addField("Piedra", "Gane") ; break;
                 case 3: embed.addField("Papel:", "Perdi") ; break;            
          }
          message.channel.send(embed);
    },
};