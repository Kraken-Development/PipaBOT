const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper-1280x800',
    description: 'sends a random 1280x800 wallpaper',
    execute(message) {
        let respuestas = 11;
    const embed = new Discord.RichEmbed();
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:");
    switch(randomR) {
      case 1: embed.setImage("https://wallpaperaccess.com/full/292434.jpg") ; break;
        case 2: embed.setImage("https://i.pinimg.com/originals/3e/8e/90/3e8e9039544e840b67d179b86ef16f99.jpg") ; break;
        case 3: embed.setImage("https://i.pinimg.com/originals/92/b0/a8/92b0a88e3810291fa428d7446cfb5279.jpg") ; break;
        case 4: embed.setImage("https://wallpaperaccess.com/full/43867.jpg") ; break;
        case 5: embed.setImage("https://decayfm.com/wp-content/uploads/2018/12/1280x800-Underwater-Sounds-wallpaper-music-and-dance-wallpapers-1.jpg?w=640") ; break;
        case 6: embed.setImage("https://tuswallpapersgratis.com/wp-content/uploads/2013/11/german_landscapes-1280x800.jpg") ; break;
        case 7: embed.setImage("https://www.frogx3.com/wp-content/uploads/2012/01/wallpapers-creativos-10.jpg") ; break;
        case 8: embed.setImage("http://www.itl.cat/pics/b/3/33794_ocean-wallpaper-desktop.jpg") ; break;
        case 9: embed.setImage("https://images-na.ssl-images-amazon.com/images/I/81wktZ9FFpL.jpg") ; break;
        case 10: embed.setImage("https://www.setaswall.com/wp-content/uploads/2017/12/Blue-And-Black-Wallpaper-19-1280x800.jpg") ; break;
        case 11: embed.setImage("http://www.solofondos.com/wp-content/uploads/2017/04/Wallpapers-paisajes-rosa-free.jpg") ; break;
    }
    message.channel.send(embed);
    },
};