const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const config = require("./config.json");

let prefix = config.prefix;

var queue = new Map();

client.on("ready", () => {
   console.log(`${client.user.tag} is now ENABLED`);
   client.user.setPresence({
    status: "online",
    game: {
        name: "pp!help / Versión 1.0.1",
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
    let texto = args.join(' '); //a la proxima hagamos algo con variables, como nombres o cosas asi
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
        .setColor("#4DE900")
        .setTitle(`Información sobre el bot:`)
        .addField("Programadores:", "Blox, GatoLandia")
        .addField("Versión del bot:", "1.0.1")
        .addField("Repositorio (Actualmente solo en GitHub):", "https://github.com/Gato-Landia/PipaBOT")
        .addField("pp!pipa", "Muestra una imagen de un loro aleatorio")
        .addField("pp!hola", "Pipa te saluda")
        .addField("pp!piedra/pp!papel/pp!tijeras", "Inicias una ronda de Piedra, papel o tijeras contra Pipa")
        .addField("pp!play [URL]", "Reproduce el URL agregado uniendose a un canal de voz")
        .addField("pp!stop", "Pipa detiene la reproducción del URL y sale del canal de voz")
        .addField("pp!somos", "Te diré qué somos")
        .addField("pp!siono", "Dime una pregunta de si o no, yo te la responderé")
        .addField("pp!invite", "Pipa enviará un link para invitar al bot a cualquier servidor")
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
  });

  client.login(config.token);
