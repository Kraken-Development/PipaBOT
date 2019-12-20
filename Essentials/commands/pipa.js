const Discord = require('discord.js');
module.exports = {
    name: 'pipa',
    aliases: ['loro', 'pipi'],
    description: 'Pipa',
    execute(message) {
        let respuestas = 19;
      let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    const embed = new Discord.RichEmbed();
      embed.setColor("#74FF00");
      embed.setDescription('Aquí una foto aleatoria de un lorito aleatorio :heart:');
      switch(randomR) {
        case 1: embed.setImage("https://i.ytimg.com/vi/FrlbNvp0wWo/maxresdefault.jpg"); break;
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
      }
      message.channel.send(embed);
    },
};