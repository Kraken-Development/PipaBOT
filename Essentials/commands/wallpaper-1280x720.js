const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper-1280x720',
    description: 'sends a random 1280x720 wallpaper',
    execute(message) {
        let respuestas = 12;
    const embed = new Discord.RichEmbed();
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:");
    switch(randomR) {
      case 1: embed.setImage("http://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg") ; break;
        case 2: embed.setImage("https://i.pinimg.com/originals/09/2a/32/092a324d78ed61e2e2dc13ec21e10b4b.jpg") ; break;
        case 3: embed.setImage("https://gameranx.com/wp-content/uploads/2019/08/The-Outer-Worlds-720P-Wallpaper-1.jpg") ; break;
        case 4: embed.setImage("https://i.pinimg.com/originals/60/f8/46/60f846c3ea94143d722b4004ac40230d.jpg") ; break;
        case 5: embed.setImage("https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1280x720_666874-mm-90.jpg") ; break;
        case 6: embed.setImage("https://i.pinimg.com/originals/91/9c/57/919c5719579d855d1fa9e1c128a80d64.jpg") ; break;
        case 7: embed.setImage("https://uhdwallpapers.org/uploads/converted/18/05/24/abstract-3d-blue-vs-red-1280x720_54564-mm-90.jpg") ; break;
        case 8: embed.setImage("https://wallpapersmug.com/download/1280x720/11a3dc/firewatch-game-sunset-artwork.jpg") ; break;
        case 9: embed.setImage("https://images.wallpaperscraft.com/image/city_vector_panorama_119914_1280x720.jpg") ; break;
        case 10: embed.setImage("https://wallpaperaccess.com/full/1078159.jpg") ; break;
        case 11: embed.setImage("https://wallpapersmug.com/download/1280x720/0f7fd2/vivo-x27-feathers-stock.jpg") ; break;
        case 12: embed.setImage("http://eskipaper.com/images/awesome-paint-wallpaper-1.jpg") ; break;
    }
    message.channel.send(embed);
    },
};