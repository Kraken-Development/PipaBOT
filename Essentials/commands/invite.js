const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    description: 'invitacion',
    execute(message) {
        const embed = new Discord.RichEmbed();
        embed.setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png");
        embed.setColor("#74FF00");
        embed.setTitle("Invitame a tu server!");
        embed.addField("Invitame con este enlace:", "https://discordapp.com/api/oauth2/authorize?client_id=646202049926791180&permissions=8&scope=bot");
        message.channel.send(embed);
    },
};