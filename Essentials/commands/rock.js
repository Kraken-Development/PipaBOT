const Discord = require('discord.js');
module.exports = {
    name: 'rock',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`You chose rock`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("I chose scissors:", "I lost") ; break;
                 case 2: embed.addField("I chose rock", "It\'s a tie") ; break;
                 case 3: embed.addField("I chose paper:", "I won") ; break;            
          }
          message.channel.send(embed);
    },
};