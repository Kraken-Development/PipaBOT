const Discord = require('discord.js');
module.exports = {
    name: 'searchgl',
    aliases: ['search-gl', 'search-google', 'searchgoogle'],
    execute: async (message, args) => {
    let searchQTitle = args.join(" ");
    let searchQ = args.join("+");  
    let searchE = ('search?q=' + searchQ + '&sourceid=discord');
    if(!searchQ) return message.channel.send('What do you wanna search?');
    const embed = new Discord.RichEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/657251481506021386/663154529025654814/favicon_google.png')
    .setDescription(`Search made by **${message.author.username}**`)
    .setTitle('(Google) You searched ' + searchQTitle,)
    .addField("https://www.google.com/" + searchE, "Click the link to see its content")
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};