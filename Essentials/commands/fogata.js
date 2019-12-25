const Discord = require('discord.js');
module.exports = {
    name: 'fogata',
    aliases: ['bonfire', 'hoguera', 'chimenea'],
    execute: async (message, args) => {
      let cases = 4;
      let randomR = Math.floor(Math.random() * (cases + 1 - 1)) + 1;
    const embed = new Discord.RichEmbed();
      embed.setColor("#ff9900");
      embed.setDescription(':christmas_tree: Una fogata para calentarte en estas fiestas :christmas_tree:');
      switch(randomR) {
        case 1: embed.setImage("https://i.pinimg.com/originals/44/3b/58/443b58a7f2f5e9425ad0eeecd53af061.gif"); break;
        case 2: embed.setImage("https://i.pinimg.com/originals/81/49/b3/8149b364e5f1e49e8db0cfc0dfbd8c3f.gif"); break;
        case 3: embed.setImage("https://i.pinimg.com/originals/a6/73/a9/a673a908142ed0e18d136db719aa4447.gif"); break;
        case 4: embed.setImage("https://i.pinimg.com/originals/f7/de/0e/f7de0eb048612b5ba7ae264da954af79.gif"); break;
      }
      message.channel.send(embed);
    },
};
