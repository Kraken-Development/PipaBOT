const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
  guildOnly: true,
    aliases: ['user-info'],
    execute(message) {
        let status = {
        "online": "Online",
        "offline": "Offline",
        "idle": "Idle",
        "dnd": "Do not disturb",

    };
    let userDiscord = message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
    .setAuthor(`Information of: ${userDiscord.user.username}`)
    .setThumbnail(userDiscord.user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Username:", `${userDiscord.user.tag}`)
    .addField("Joined at:", userDiscord.joinedAt.toDateString(), true)
    .addField("Status:", `${status[userDiscord.presence.status]}`)
    message.channel.send(embed);
    }, 
};