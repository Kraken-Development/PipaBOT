const Discord = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['commands', 'command-list', 'commands-list'],
    execute(message, args) {
      
      if(!args[0]) {
      if(message.channel.type != 'dm') message.react('✅')
      
      const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/474331584447643658/647640189379936276/Sin_titulo.png")
        .setColor("#74FF00")
      .setTitle("List of available commands")
      .setDescription("To get more info about a command, type\n `pip!help [Command name]`")
      .addField("▬MODERATION▬", "`pip!ban`\n`pip!kick`\n`pip!prune`")
      .addField("▬INFORMATION▬", "`pip!serverinfo`\n`pip!userinfo`\n`pip!botinfo`\n`pip!avatar`\n`pip!invite`\n`pip!ping`\n`pip!whatsnew`")
      .addField("▬SEARCH▬", "`pip!searchgl`\n`pip!searchyt`\n`pip!searchsp`")
      .addField("▬CALCULATION▬", "`pip!plus`\n`pip!minus`\n`pip!multiplication`\n`pip!division`\n`pip!f-to-c`\n`pip!c-to-f`")
      .addField("▬WALLPAPER▬", "`pip!wallpaper-1280x720`\n`pip!wallpaper-1280x800`\n`pip!wallpaper-1366x768`\n`pip!wallpaper-1920x1080`\n`pip!wallpaper-4k`")
      .addField("▬FUN▬", "`pip!hi`\n`pip!rock/paper/scissors`\n`pip!yesorno`\n`pip!say`\n`pip!roll`\n`pip!parrot`")
      .addField("▬MUSIC▬", "`pip!play`\n`pip!stop`");
        message.author.send(embed);
      } else {
      
      let commandName = args[0];
      
        if(args[0] == '[Command' && args[1] == 'name]') {
          message.channel.send("Haha very funny...")
        }
        if(args[0] == 'ban') {
          message.channel.send("Bans an user in the server (You must have the BAN MEMBERS permission)");
          message.channel.send("Usage: pip!ban [Name] [Reason]");
        }
        if(args[0] == 'kick') {
          message.channel.send("Kicks an user in the server (You must have the KICK MEMBERS permission)");
          
        }
        if(args[0] == 'prune') {
          message.channel.send("Deletes a number of messages in the channel (You must have the MANAGE MESSAGES permission)");
          message.channel.send("Usage: pip!prune [Number of messages]");
        }
        if(args[0] == 'serverinfo') {
          message.channel.send("Shows information about the server");
          message.channel.send("Usage: pip!serverinfo");
        }
        if(args[0] == 'userinfo') {
          message.channel.send("Shows information about the chosen user (if none, shows information about you)");
          message.channel.send("Usage: pip!userinfo [Name]");
        }
        if(args[0] == 'botinfo') {
          message.channel.send("Shows information about the bot");
          message.channel.send("Usage: pip!botinfo");
        }
        if(args[0] == 'avatar') {
          message.channel.send("Shows the avatar of the chosen user (if none, shows your avatar)");
          message.channel.send("Usage: pip!avatar [Name]");
        }
        if(args[0] == 'invite') {
          message.channel.send("Shows the invite link for the bot and the spanish version");
          message.channel.send("Usage: pip!invite");
        }
        if(args[0] == 'ping') {
          message.channel.send("Shows your latency (in ms)");
          message.channel.send("Usage: pip!ping");
        }
        if(args[0] == 'whatsnew') {
          message.channel.send("Shows the latest changes in the bot");
          message.channel.send("Usage: pip!whatsnew");
        }
        if(args[0] == 'searchgl') {
          message.channel.send("Search in Google");
          message.channel.send("Usage: pip!searchgl [Search]");
        }
        if(args[0] == 'searchyt') {
          message.channel.send("Search in YouTube");
          message.channel.send("Usage: pip!searchyt [Search]");
        }
        if(args[0] == 'searchsp') {
          message.channel.send("Search in Spotify");
          message.channel.send("Usage: pip!searchsp [Search]");
        }
        if(args[0] == 'plus') {
          message.channel.send("Makes a sum equation from 2 to 5 numbers");
          message.channel.send("Usage: pip!plus [Numbers]");
        }
        if(args[0] == 'minus') {
          message.channel.send("Makes a subtraction equation from 2 to 5 numbers");
          message.channel.send("Usage: pip!minus [Numbers]");
        }
        if(args[0] == 'multiplication') {
          message.channel.send("Makes a multiplication equation from 2 to 5 numbers");
          message.channel.send("Usage: pip!multiplication [Numbers]");
        }
        if(args[0] == 'division') {
          message.channel.send("Makes a division equation from 2 to 5 numbers");
          message.channel.send("Usage: pip!division [Numbers]");
        }
        if(args[0] == 'f-to-c') {
          message.channel.send("Converts from Fahrenheit to Celsius");
          message.channel.send("Usage: pip!f-to-c [Fahrenheit]");
        }
        if(args[0] == 'c-to-f') {
          message.channel.send("Converts from Celsius to Fahrenheit");
          message.channel.send("Usage: pip!c-to-f [Celsius]");
        }
        if(args[0] == 'wallpaper-1280x720') {
          message.channel.send("Sends a random 1280x720 wallpaper");
          message.channel.send("Usage: pip!wallpaper-1280x720");
        }
        if(args[0] == 'wallpaper-1280x800') {
          message.channel.send("Sends a random 1280x800 wallpaper");
          message.channel.send("Usage: pip!wallpaper-1280x800");
        }
        if(args[0] == 'wallpaper-1366x768') {
          message.channel.send("Sends a random 1366x768 wallpaper");
          message.channel.send("Usage: pip!wallpaper-1366x768");
        }
        if(args[0] == 'wallpaper-1920x1080') {
          message.channel.send("Sends a random 1920x1080 wallpaper");
          message.channel.send("Usage: pip!wallpaper-1920x1080");
        }
        if(args[0] == 'wallpaper-4k') {
          message.channel.send("Sends a random 4k wallpaper");
          message.channel.send("Usage: pip!wallpaper-4k");
        }
        if(args[0] == 'hi') {
          message.channel.send("Pipa says hello to you");
          message.channel.send("Usage: pip!hi");
        }
        if(args[0] == 'rock/paper/scissors') {
          message.channel.send("Starts a round of Rock paper scissors vs Pipa");
          message.channel.send("Usage: pip!rock // pip!paper // pip!scissors");
        }
        if(args[0] == 'yesorno') {
          message.channel.send("Pipa answers a yes-or-no question");
          message.channel.send("Usage: pip!yesorno [Question]");
        }
        if(args[0] == 'say') {
          message.channel.send("Pipa repeats what you say (Of course he will, he\'s a parrot)");
          message.channel.send("Usage: pip!say [Message]");
        }
        if(args[0] == 'roll') {
          message.channel.send("Roll a dice!");
          message.channel.send("Usage: pip!roll");
        }
        if(args[0] == 'parrot') {
          message.channel.send("Pipa sends a photo of someone in his family");
          message.channel.send("Usage: pip!parrot");
        }
      }
    },
};