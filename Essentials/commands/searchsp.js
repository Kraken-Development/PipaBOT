const Discord = require('discord.js');
module.exports = {
    name: 'searchsp',
    aliases: ['search-sp', 'searchspotify', 'search-spotify'],
    execute: async (message, args) => {
      let searchQTitleSP = args.join(" ");
    let searchSPQ = args.join("%20");
    let searchSPE = ('search/' + searchSPQ);
    if(!searchSPQ) return message.channel.send('What do you wanna search?');
    const embed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.icon-icons.com/icons2/836/PNG/512/Spotify_icon-icons.com_66783.png")
    .setDescription(`Search made by **${message.author.username}**`)
    .setTitle('(Spotify) You searched ' + searchQTitleSP)
    .addField("https://open.spotify.com/" + searchSPE, "Click the link to see its content")
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};