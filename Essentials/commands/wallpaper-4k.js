const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper-4k',
    aliases: ['wallpaper-3840x2160'],
    description: 'sends a random 4k wallpaper',
    execute(message) {
      let respuestas = 14
    const embed = new Discord.RichEmbed()
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:")
    switch(randomR) {
      case 1: embed.setImage("https://i.ibb.co/cwMcNZP/wallpapersden-com-small-memory-3840x2160.jpg") ; break;
        case 2: embed.setImage("https://wallpaperaccess.com/full/7310.jpg") ; break;
        case 3: embed.setImage("https://wallpaperplay.com/walls/full/d/c/0/20618.jpg") ; break;
        case 4: embed.setImage("http://hdqwalls.com/wallpapers/anime-minimalism-4k-4e.jpg") ; break;
        case 5: embed.setImage("https://i.pinimg.com/originals/06/42/6b/06426b1ebab00c9e09f7db30024702de.jpg") ; break;
        case 6: embed.setImage("https://images5.alphacoders.com/958/958580.jpg") ; break;
        case 7: embed.setImage("https://wallpaperaccess.com/full/241346.jpg") ; break;
        case 8: embed.setImage("https://images3.alphacoders.com/954/954241.jpg") ; break;
        case 9: embed.setImage("https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-4K-Wallpaper-3840x2160.jpg") ; break;
        case 10: embed.setImage("https://wallpaperaccess.com/full/763110.jpg") ; break;
        case 11: embed.setImage("https://www.4kwallpaperhd.com/wp-content/uploads/2019/05/Godzilla-King-of-the-Monsters-4K-Wallpaper-HD-3840x2160.jpg") ; break;
        case 12: embed.setImage("http://s1.picswalls.com/wallpapers/2017/12/10/4k-desktop-wallpaper_110627716_312.jpg") ; break;
        case 13: embed.setImage("https://wallpaperaccess.com/full/754629.jpg") ; break;
        case 14: embed.setImage("https://wallpapertag.com/wallpaper/full/d/a/a/138241-4k-abstract-wallpaper-3840x2160-for-computer.jpg") ; break;
    }
    message.channel.send(embed);
    },
};