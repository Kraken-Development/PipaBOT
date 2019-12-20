const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper-1366x768',
    description: 'sends a random 1366x768 wallpaper',
    execute(message) {
        let respuestas = 13;
    const embed = new Discord.RichEmbed();
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:");
    switch(randomR) {
      case 1: embed.setImage("https://i.pinimg.com/originals/1b/e5/7a/1be57acefc30dfab74fa6699da8866a8.jpg") ; break;
      case 2: embed.setImage("https://testdevelocidad.info/wp-content/uploads/2018/06/Descargar-Fondos-de-Pantalla.jpg") ; break;
      case 3: embed.setImage("https://arma3.com/assets/img/wallpapers/contact/2/Arma%203%20Contact_wallpaper_1366%C3%97768.jpg") ; break;
      case 4: embed.setImage("https://i.pinimg.com/originals/48/25/39/482539ebc8baccd4d2ec8dd7e2d68d42.jpg") ; break;
      case 5: embed.setImage("https://www.elsetge.cat/myimg/f/29-292240_calaveras-wallpaper-skull-wallpaper-red.jpg") ; break;
        case 6: embed.setImage("https://i.blogs.es/aad9ce/fondo-de-pantalla-dinamico/1366_2000.jpg") ; break;
        case 7: embed.setImage("https://www.desktopbackground.org/download/o/2010/07/07/44707_page-2-laptop-1366x768-desktop-wallpapers-hd-1366x768-free_1366x768_h.jpg") ; break;
        case 8: embed.setImage("https://www.elsetge.cat/myimg/f/7-77510_high-resolution-one-piece-laptop-wallpaper-id-fondos.jpg") ; break;
        case 9: embed.setImage("https://wallpaperaccess.com/full/370157.jpg") ; break;
        case 10: embed.setImage("https://image.winudf.com/v2/image/Y29tLmZyZW5kemFwcHMucG9rZW1vbl9zY3JlZW5zaG90c181Xzc0MTIyZTQ4/screen-5.jpg?fakeurl=1&type=.jpg") ; break;
        case 11: embed.setImage("https://www.larutadelsorigens.cat/wallpic/full/9-94409_hd-wallpapers-for-desktop-imagenes-del-universo-en.jpg") ; break;
        case 12: embed.setImage("https://www.mascotahogar.com/1366x768/dibujo-de-un-gato-como-wallpaper.jpg") ; break;
        case 13: embed.setImage("https://i.pinimg.com/originals/24/32/97/2432977669bda5ee385027a1d30efd40.jpg") ; break;
    }
    message.channel.send(embed);
    },
};