const Discord = require('discord.js');
module.exports = {
    name: 'scissors',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`You chose scissors`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("I chose scissors:", "It\'s a tie") ; break;
                 case 2: embed.addField("I chose rock", "I won") ; break;
                 case 3: embed.addField("I chose paper:", "I lost") ; break;            
          }
          message.channel.send(embed);
    },
};