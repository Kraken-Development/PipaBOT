const Discord = require('discord.js');
module.exports = {
    name: 'searchsp',
    aliases: ['search-sp', 'searchspotify', 'search-spotify'],
    execute: async (message, args) => {
      let searchQTitleSP = args.join(" ");
    let searchSPQ = args.join("%20");
    let searchSPE = ('search/' + searchSPQ);
    if(!searchSPQ) return message.channel.send('Ingresa lo que deseas buscar');
    const embed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.icon-icons.com/icons2/836/PNG/512/Spotify_icon-icons.com_66783.png")
    .setDescription(`Busqueda realizada por **${message.author.username}**`)
    .setTitle('(Spotify) Buscaste ' + searchQTitleSP)
    .addField("https://open.spotify.com/" + searchSPE, "Cliquea la página para ver su contenido")
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};