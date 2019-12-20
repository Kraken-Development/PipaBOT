const Discord = require('discord.js');
module.exports = {
    name: 'roll',
    aliases: ['roll6', 'roll-6'],
    execute: async (message, args) => {
      const embed = new Discord.RichEmbed;
      function tirar() { 
        let caras = 6;
        let randomR = Math.floor(Math.random() * (caras + 1 - 1)) + 1;
        embed.setColor('#9e1818');
        embed.setAuthor(`Dado tirado por ${message.author.username}`);
        embed.setTitle('El dado cayó en:');
        switch(randomR) {
          case 1: embed.setImage('https://cdn.discordapp.com/attachments/654106991626813453/655844861563371530/dado-1.png'); break;
          case 2: embed.setImage('https://cdn.discordapp.com/attachments/654106991626813453/655844868337172480/dado-2.png'); break;
          case 3: embed.setImage('https://cdn.discordapp.com/attachments/654106991626813453/655844869578817559/dado-3.png'); break;
          case 4: embed.setImage('https://cdn.discordapp.com/attachments/654106991626813453/655844871285899276/dado-4.png'); break;
          case 5: embed.setImage('https://cdn.discordapp.com/attachments/654106991626813453/655844872926003210/dado-5.png'); break;
          case 6: embed.setImage('https://cdn.discordapp.com/attachments/654106991626813453/655844875266162701/dado-6.png'); break;
        }
        message.channel.send(embed);
}
      message.channel.send('Mezclando...');
      
      setTimeout(tirar, 2000);

    },
};