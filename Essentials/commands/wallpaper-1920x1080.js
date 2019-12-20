const Discord = require('discord.js');
module.exports = {
    name: 'wallpaper-1920x1080',
    description: 'sends a random 1920x1080 wallpaper',
    execute(message) {
        let respuestas = 12;
    const embed = new Discord.RichEmbed();
    let randomR = Math.floor(Math.random() * (respuestas + 1 - 1)) + 1;
    embed.setColor("RANDOM")
    .setTitle("He elegido este wallpaper para ti :heart:");
    switch(randomR) {
      case 1: embed.setImage("https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/") ; break;
        case 2: embed.setImage("https://i.imgur.com/Hykr7by.jpg") ; break;
        case 3: embed.setImage("https://i.imgur.com/ZerwVp3.jpg") ; break;
        case 4: embed.setImage("https://store-images.s-microsoft.com/image/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.176d9e9a-fb7a-473e-90f6-26c2993854f4?mode=scale&q=90&h=1080&w=1920") ; break;
        case 5: embed.setImage("https://images.squarespace-cdn.com/content/v1/5925832e03596efb6d4b502a/1552467575287-2JMW8W2J3EJFYMP2QZQR/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/DRG_Wallpaper_GlacialStrata.jpg?format=2500w") ; break;
        case 6: embed.setImage("https://pluviophile.net/wp-content/uploads/wet-empty-road-wallpaper.jpg") ; break;
        case 7: embed.setImage("https://i.pinimg.com/originals/80/97/53/809753e3ea7381415fb66d27e957f4eb.jpg") ; break;
        case 8: embed.setImage("https://i.pinimg.com/originals/ee/9f/12/ee9f129c12ec470118fb1f2729a1f2b7.jpg") ; break;
        case 9: embed.setImage("https://wallpapershome.com/images/pages/pic_h/19547.jpg") ; break;
        case 10: embed.setImage("https://www.mercedesamgf1.com/wp-content/uploads/sites/3/2019/09/mf1_190924_sing_wallpapers_desktop_2-1920x1080.jpg") ; break;
        case 11: embed.setImage("https://esossl-a.akamaihd.net/assets/img/cms/media/0df6a31bf161cf0133a772d8d9a6a9f0_the-elder-scrolls-online-elsweyr_wallpaper-1920x1080.jpg") ; break;
        case 12: embed.setImage("https://cdn.dodowallpaper.com/full/586/arctic-monkeys-wallpapers-5.png") ; break;
    }
    message.channel.send(embed);
    },
};