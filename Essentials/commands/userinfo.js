const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
  guildOnly: true,
    aliases: ['user-info'],
    execute(message) {
        let status = {
        "online": "Online",
        "offline": "Offline",
        "idle": "Ausente",
        "dnd": "No molestar",

    };
    let userDiscord = message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
    .setAuthor(`Información de: ${userDiscord.user.username}`)
    .setThumbnail(userDiscord.user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Usuario:", `${userDiscord.user.tag}`)
    .addField("Se unió al servidor el:", userDiscord.joinedAt.toDateString(), true)
    .addField("Estado:", `${status[userDiscord.presence.status]}`)
    message.channel.send(embed);
    }, 
};