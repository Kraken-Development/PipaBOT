const Discord = require('discord.js');
module.exports = {
    name: 'searchyt',
  aliases: ['search-yt', 'search-youtube', 'searchyoutube'],
    execute: async (message, args) => {
    let searchQTitleYT = args.join(" ");
    let searchYTQ = args.join("+");
    let searchYTE = ('results?search_query=' + searchYTQ + '&page=&utm_source=discord');
    if(!searchYTQ) return message.channel.send('Ingresa lo que deseas buscar');
    const embed = new Discord.RichEmbed()
          .setThumbnail('https://freepngimg.com/download/youtube/77697-logo-computer-youtube-icons-download-hd-png.png')
    .setDescription(`Busqueda realizada por **${message.author.username}**`)
    .setTitle('(YouTube) Buscaste ' + searchQTitleYT)
    .addField("https://www.youtube.com/" + searchYTE, "Cliquea la página para ver su contenido")
    .setColor("RANDOM");
    message.channel.send(embed);
    },
};