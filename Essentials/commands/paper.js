const Discord = require('discord.js');
module.exports = {
    name: 'paper',
    execute(message) {
        let respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`You chose paper`);
          embed.setColor("RANDOM");
          switch(randomR) {
            case 1: embed.addField("I chose scissors:", "I won") ; break;
                 case 2: embed.addField("I chose rock", "I lost") ; break;
                 case 3: embed.addField("I chose paper:", "It\'s a tie") ; break;            
          }
          message.channel.send(embed);
    },
};