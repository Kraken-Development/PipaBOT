const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');

const prefix = "pp!";

var queue = new Map();

client.on("ready", () => {
   console.log(`${client.user.tag} is now ENABLED`);
   client.user.setPresence({
    status: "online",
    game: {
        name: "pp!help / Versión 1.0.2",
        type: "PLAYING"
    }
})
});

async function play(message, serverQueue) {
    const args = message.content.split(" ");
 
    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.reply("debes entrar a el canal de voz.");
    const permission = voiceChannel.permissionsFor(message.client.user);
    if(!permission.has('CONNECT') || !permission.has("SPEAK")) {
        return message.channel.send("Necesito permisos para entrar a el canal de voz")
    }
 
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
    };
 
    if(!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        };
        queue.set(message.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try{
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            playSong(message.guild, queueConstruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id)
            return message.channel.send("ha ocurrido un errror al reproducir: " + err);
        }
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`la canción **${song.title}** se ha añadido a la lista`);
    }
}
 
function playSong(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            serverQueue.songs.shift();
            playSong(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.log(error);
        })
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    }

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  const serverQueue = queue.get(message.guild.id);
    if(!message.guild) return;
  
     if(command == "play") {
        play(message, serverQueue);
    };
  
  if(command == "stop") {
        let canalvoz = message.member.voiceChannel;

if(!canalvoz) {
    message.channel.send('No estoy conectado a un canal de voz.');

} else {
    message.channel.send('__saliendo del canal de voz__').then(() => {
        canalvoz.leave();

    }).catch(error => console.log(error));

}
  }
  
    if(command == "di") {
        let texto = args.join(' ');
        if(!texto) return message.reply("Dime que es lo que quieres que diga **owo**");
        message.delete()
        message.channel.send(texto);
    }
    if(command == "papel") {
          respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Piedra, Papel o Tijeras`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Tijeras:", "Gane") ; break;
                 case 2: embed.addField("Piedra", "Perdi") ; break;
                 case 3: embed.addField("Papel:", "Empate") ; break;            
          };
          message.channel.send(embed);
        }
  
    if(command == "tijeras") {
          respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Piedra,Papel o Tijeras`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Tijeras:", "Empate") ; break;
                 case 2: embed.addField("Piedra", "Gane") ; break;
                 case 3: embed.addField("Papel:", "Perdi") ; break;            
          };
          message.channel.send(embed);
        }
  
    if(command == "piedra") {
          respuestas = 3;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Piedra,Papel o Tijeras`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Tijeras:", "Perdi") ; break;
                 case 2: embed.addField("Piedra", "Empate") ; break;
                 case 3: embed.addField("Papel:", "Gane") ; break;            
          };
          message.channel.send(embed);
        }
  
  if(command == "siono") {
    let texto = args.join(' ');
          respuestas = 6;
      if(!texto) return message.reply("Preguntame!")
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Si o no`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Obviamente", "Si") ; break;
            case 2: embed.addField("Obviamente", "No") ; break;
            case 3: embed.addField("Quizás", "No") ; break;
            case 4: embed.addField("Quizás", "Sí") ; break;
            case 5: embed.addField("No estoy seguro pero...", "No") ; break;
            case 6: embed.addField("No estoy seguro pero...", "Sí") ; break;
                };
          message.channel.send(embed);
        }
  
    if(command == "hola") {
          respuestas = 10;
          let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
     const embed = new Discord.RichEmbed();
          embed.setTitle(`Pipa te ha saludado`)
          embed.setColor("RANDOM")
          switch(randomR) {
            case 1: embed.addField("Hola:", "Humano") ; break;
                 case 2: embed.addField("Hola:", "Creador") ; break;
                 case 3: embed.addField("Hola:", "Diseñador") ; break;
                 case 4: embed.addField("Hola:", "Gamer") ; break;
                 case 5: embed.addField("Hola:", "Cadaver") ; break;
                 case 6: embed.addField("Hola:", "Zombie") ; break;
                 case 7: embed.addField("Hola:", "Alien") ; break;
                 case 8: embed.addField("Hola:", "Gato") ; break;
                 case 9: embed.addField("Hola:", "Perro") ; break;
                 case 10: embed.addField("Hola:", "Robot") ; break;
          };
          message.channel.send(embed);
    }
  
   if(command == "help") {
        const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png")
        .setColor("#74FF00")
        .setTitle(`Información sobre el bot:`)
        .addField("Programadores:", "Blox, GatoLandia")
        .addField("Versión del bot:", "1.0.1")
        .addField("Repositorio (Actualmente solo en GitHub):", "https://github.com/Gato-Landia/PipaBOT")
        .addField("pp!pipa", "Muestra una imagen de un loro aleatorio")
        .addField("pp!hola", "Pipa te saluda")
        .addField("pp!piedra/pp!papel/pp!tijeras", "Inicias una ronda de Piedra, papel o tijeras contra Pipa")
        .addField("pp!play [URL]", "Reproduce el URL agregado uniendose a un canal de voz")
        .addField("pp!stop", "Pipa detiene la reproducción del URL y sale del canal de voz")
        .addField("pp!somos", "Pipa te dirá qué somos")
        .addField("pp!siono", "Di una pregunta de si o no, Pipa te la responderá")
        .addField("pp!invite", "Pipa enviará un link para invitar al bot a cualquier servidor")
        .addField("pp!ping", "Mira tu ping (ms)!")
        .addField("pp!wallpaper-1366x768/1920x1080/1280x800/1280x720/4k", "Pipa eligirá un wallpaper aleatorio dependiendo de tu resolución")
        .addField("pp!kick [Nombre] [Razón]", "Kickea a una persona del servidor")
        .addField("pp!ban [Nombre] [Razón]", "Banea a una persona del servidor")
        .addField("pp!borrar [Número de mensajes]", "Borra un determinado número de mensajes en el canal")
        .addField("pp!serverinfo", "Muestra información del servidor")
        message.channel.send(embed);
    };
         

    if(command == "pipa") {
      respuestas = 19;
      let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    const embed = new Discord.RichEmbed();
      embed.setColor("#74FF00")
      embed.setDescription('Aquí una foto aleatoria de un lorito aleatorio :heart:')
      switch(randomR) {
        case 1: embed.setImage("https://i.ytimg.com/vi/FrlbNvp0wWo/maxresdefault.jpg")
        case 2: embed.setImage("https://www.parrotlivestore.com/wp-content/uploads/2019/09/amazonas-aestiva-02-600x600.jpg"); break;
        case 3: embed.setImage("https://previews.123rf.com/images/beo88/beo881606/beo88160600155/58402517-individual-aestiva-loro-del-amazonas-amazona-aestiva-sentado-en-una-rama-de-%C3%A1rbol.jpg"); break;
        case 4: embed.setImage("https://img.milanuncios.com/fg/3138/38/313838985_1.jpg?VersionId=QAyj_1EiFN3kJpsCgCA6xDaCFMQOGTx8"); break;
        case 5: embed.setImage("https://assets.catawiki.nl/assets/2018/11/26/9/d/c/9dcf0063-a9ce-4255-8b8a-62989ee49783.jpg"); break;
        case 6: embed.setImage("http://www.ecoregistros.org/site/images/dataimages/2017/09/30/221202/DSC_1084-eb.jpg"); break;
        case 7: embed.setImage("https://upload.wikimedia.org/wikipedia/commons/5/5b/Amazona_aestiva_-_Maroparque_01.jpg"); break;
        case 8: embed.setImage("https://sib.gob.ar/api/2.0.0/thumb?filename=20120719092557_CL_Amazona_aestiva__Esteros_del_Ibera.JPG&size=400"); break;
        case 9: embed.setImage("https://upload.wikimedia.org/wikipedia/commons/b/bf/AmazonBlueFrontParrot.JPG"); break;
        case 10: embed.setImage("https://www.curiosfera.com/wp-content/uploads/2018/05/Loro-del-amazonas.jpg"); break;
        case 11: embed.setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Amazona_aestiva_-Brazil_-pet-8a.jpg/250px-Amazona_aestiva_-Brazil_-pet-8a.jpg"); break;
        case 12: embed.setImage("https://pajareriavillena.com/wp-content/uploads/2015/01/Amazonas-Aestiva.jpg"); break;
        case 13: embed.setImage("https://live.staticflickr.com/65535/40732186033_c9a3625fdd_b.jpg"); break;
        case 14: embed.setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Blue-fronted_Amazon_%28Amazona_aestiva%29_-8-2rc.jpg/220px-Blue-fronted_Amazon_%28Amazona_aestiva%29_-8-2rc.jpg"); break;
        case 15: embed.setImage("https://www.curiosfera.com/wp-content/uploads/2018/05/Amazona-de-frente-azul.jpg"); break;
        case 16: embed.setImage("http://www.avesypajaros.com/Minis/amazona-aestiva.jpg"); break;
        case 17: embed.setImage("https://farm66.staticflickr.com/65535/48595966097_9f96072077_b.jpg"); break;
        case 18: embed.setImage("https://i2.bssl.es/faunatura/2011/11/amazona-loro.jpg"); break;
        case 19: embed.setImage("https://www.hogarmania.com/archivos/201105/loro-amazonas-xl-668x400x80xX.jpg"); break;
      };
      message.channel.send(embed);
    }
  if(command == "invite") {
    const embed = new Discord.RichEmbed();
    embed.setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png")
    embed.setColor("#74FF00")
    embed.setTitle("Invitame a tu server!")
    embed.addField("Invitame con este enlace:", "https://discordapp.com/api/oauth2/authorize?client_id=646202049926791180&permissions=8&scope=bot")
    message.channel.send(embed);
  }
  if(command == "somos") {
    respuestas = 8;
    const embed = new Discord.RichEmbed();
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    embed.setTitle("Tu eres...")
    switch(randomR) {
      case 1: embed.addField("Obviamente eres un...", "Loro"); break;
      case 2: embed.addField("Obviamente eres un...", "Pony"); break;
      case 3: embed.addField("Obviamente eres un...", "Unicornio"); break;
      case 4: embed.addField("Obviamente eres un...", "Gato"); break;
      case 5: embed.addField("Obviamente eres un...", "Dinosaurio"); break;
      case 6: embed.addField("Obviamente eres un...", "Perro"); break;
      case 7: embed.addField("Obviamente eres un...", "Robot"); break;
      case 8: embed.addField("Obviamente eres un...", "Humano"); break;
    };
    message.channel.send(embed);
  }
  
  if(command == "somos") {
    respuestas = 8;
    const embed = new Discord.RichEmbed();
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    embed.setTitle("Y yo...")
    switch(randomR) {
      case 1: embed.addField("Obviamente soy un...", "Loro"); break;
        case 2: embed.addField("Obviamente soy un...", "Pony"); break;
        case 3: embed.addField("Obviamente soy un...", "Unicornio"); break;
        case 4: embed.addField("Obviamente soy un...", "Gato"); break;
        case 5: embed.addField("Obviamente soy un...", "Zorro"); break;
        case 6: embed.addField("Obviamente soy un...", "Perro"); break;
        case 7: embed.addField("Obviamente soy un...", "Robot"); break;
        case 8: embed.addField("Obviamente soy un...", "Humano"); break;
    }
    message.channel.send(embed);
  }
  if(command == "ping") {
            let latencia = Math.floor(message.client.ping);
            const embed = new Discord.RichEmbed()
            .setAuthor(`Ping de ${message.author.username}`)
            .setColor("RANDOM")
            .setTitle("Mira tu ping!")
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Pong!", ":ping_pong:" + latencia + "ms");
            message.channel.send(embed)
        };
  if(command == "wallpaper-1366x768") {
    respuestas = 13
    const embed = new Discord.RichEmbed()
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:")
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
  }
  if(command == "wallpaper-1920x1080") {
    respuestas = 12
    const embed = new Discord.RichEmbed()
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:")
    switch(randomR) {
      case 1: embed.setImage("https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/") ; break;
        case 2: embed.setImage("https://i.imgur.com/Hykr7by.jpg") ; break;
        case 3: embed.setImage("https://i.imgur.com/ZerwVp3.jpg") ; break;
        case 4: embed.setImage("https://store-images.s-microsoft.com/image/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.176d9e9a-fb7a-473e-90f6-26c2993854f4?mode=scale&q=90&h=1080&w=1920") ; break;
        case 5: embed.setImage("https://images.squarespace-cdn.com/content/v1/5925832e03596efb6d4b502a/1552467575287-2JMW8W2J3EJFYMP2QZQR/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/DRG_Wallpaper_GlacialStrata.jpg?format=2500w") ; break;
        case 6: embed.setImage("https://pluviophile.net/wp-content/uploads/wet-empty-road-wallpaper.jpg") ; break;
        case 7: embed.setImage("https://i.pinimg.com/originals/80/97/53/809753e3ea7381415fb66d27e957f4eb.jpg") ; break;
        case 8: embed.setImage("https://i.pinimg.com/originals/ee/9f/12/ee9f129c12ec470118fb1f2729a1f2b7.jpg") ; break;
        case 9: embed.setImage("https://wallpapershome.com/images/pages/pic_h/19547.jpg") ; break
        case 10: embed.setImage("https://www.mercedesamgf1.com/wp-content/uploads/sites/3/2019/09/mf1_190924_sing_wallpapers_desktop_2-1920x1080.jpg") ; break;
        case 11: embed.setImage("https://esossl-a.akamaihd.net/assets/img/cms/media/0df6a31bf161cf0133a772d8d9a6a9f0_the-elder-scrolls-online-elsweyr_wallpaper-1920x1080.jpg") ; break;
        case 12: embed.setImage("https://cdn.dodowallpaper.com/full/586/arctic-monkeys-wallpapers-5.png") ; break;
    }
    message.channel.send(embed);
  }
  if(command == "wallpaper-1280x800") {
    respuestas = 11
    const embed = new Discord.RichEmbed()
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:")
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
  }
  if(command == "wallpaper-1280x720") {
    respuestas = 12
    const embed = new Discord.RichEmbed()
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:")
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
  }
  if(command == "wallpaper-4k") {
    respuestas = 14
    const embed = new Discord.RichEmbed()
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:")
    switch(randomR) {
      case 1: embed.setImage("https://images.wallpapersden.com/image/download/small-memory_58461_3840x2160.jpg") ; break;
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
  }
  if(command == "serverinfo") {
        var server = message.guild;
        const embed = new Discord.RichEmbed()
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .addField("Región:", server.region, true)
        .addField('Creado en:', server.joinedAt.toDateString(), true)
        .addField('Dueño:', server.owner.user.tag, true)
        .addField('Miembros:', server.memberCount, true)
        .addField('Roles:', server.roles.size, true)
        .setColor("RANDOM");

        message.channel.send(embed);

    };

    if(command == "borrar") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permiso para usar este comando")
        if(!args[0]) return message.channel.send("¿Cuántos mensajes tengo que borrar?")
        let number = args[0]
        if(isNaN(number)) return message.channel.send("Necesitas poner numeros, no letras ni simbolos")
        number = parseInt(number)
        if(number >= 101 || number <= 0) return message.channel.send("Debes ingresar un valor entre 0 y 100")
        message.channel.bulkDelete(number + 1 ).then( () => {
            message.channel.send(`Se desintegraron ${number} mensajes usando las gemas del infinito`).then(m => m.delete(5000))
        }).catch(error => {
            message.channel.send(`Ocurrió un error: ${error.message}`)
        })
    };



     if(command == "kick") {
        const mencionado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        const razon = args.join(' ').slice(22);
    
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No tienes suficientes permisos para usar este comando");
        if(!mencionado) return message.reply("¿A quién quieres banear?");
        if(mencionado.hasPermission("ADMINISTRATOR")) return message.reply("Su nivel de administrador es mayor a 9000, no puedo banearlo")
        if(!razon) return message.reply("Debes añadir una razón");
        
        const embed = new Discord.RichEmbed()
        .setTitle("KICK")
        .setColor("RANDOM")
        .addField("Usuario expulsado:", `${mencionado}`)
        .addField("Expulsado por:", `${message.author.username}`)
        .addField("Canal:", message.channel)
        .addField("Hora:", message.createdAt)
        .addField("Razón:", razon);
    
        let logs = message.guild.channels.find(`name`, "logs")
        if(!logs) return message.channel.send("No encuentro el canal de logs")
    
        message.guild.member(mencionado).kick(razon);
        logs.send(embed);
        message.channel.send(`El usuario ${mencionado.user.username} acaba de ser baneado por ${message.author.username}`)
        }

    if(command == "ban") {
        const mencionado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        const razon = args.join(' ').slice(22);
    
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No tienes suficientes permisos para usar este comando");
        if(!mencionado) return message.reply("No se ha podido encontrar el usuario")
        if(mencionado.hasPermission("BAN_MEMBERS")) return message.reply("Su nivel de administrador es mayor a 9000, no puedo banearlo")
        if(!razon) return message.reply("Debes añadir una razón");
        
        const embed = new Discord.RichEmbed()
        .setTitle("**BAN**")
        .setColor("RANDOM")
        .addField("Usuario baneado:", `${mencionado}`)
        .addField("Baneado por:", `${message.author.username}`)
        .addField("Canal:", message.channel)
        .addField("Hora:", message.createdAt)
        .addField("Razón:", razon);
    
        let logs = message.guild.channels.find(`name`, "logs")
        if(!logs) return message.channel.send("No encuentro el canal de logs por ningún lado :eyes:")
    
        message.guild.member(mencionado).ban(razon);
        logs.send(embed);
        message.channel.send(`${message.author.username} acaba de hacer **La Jugada de La Partida**, baneando a ${mencionado.user.username}. Para más información ve a ${logs}`)
        }
  if(command == "avatar") {
          let mencionado = message.mentions.members.first() || message.member;
          const embed = new Discord.RichEmbed()
          .setTitle(`Avatar de: ${mencionado.user.username}`)
          .setColor("RANDOM")
          .setImage(mencionado.user.displayAvatarURL);
          message.channel.send(embed);
        };
  });
  client.login(process.env.token);
//PipaBOT made by Blox and Gato Landia. 2019
