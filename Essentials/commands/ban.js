const Discord = require('discord.js');
module.exports = {
    name: 'ban',
  guildOnly: true,
	execute(message, args) {
		const userDiscord = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        const reason = args.join(' ').slice(22);
    
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have enough permissions to perform this action");
        if(!userDiscord) return message.reply("User not found");
        if(userDiscord.hasPermission("BAN_MEMBERS")) return message.reply(`${userDiscord.user.username}'s' admin level is OVER 9000`);
        if(!reason) return message.reply("You must enter a reason");
        
        const embed = new Discord.RichEmbed()
        .setTitle("**BAN**")
        .setColor("RANDOM")
        .addField("Banned user:", `${userDiscord}`)
        .addField("Banned by:", `${message.author.username}`)
        .addField("Channel:", message.channel)
        .addField("At:", message.createdAt)
        .addField("Reason:", reason);
    
        let logs = message.guild.channels.find(`name`, "logs");
        if(logs) logs.send(embed);
    
        message.guild.member(userDiscord).ban(reason);
        message.channel.send(`${message.author.username} just got the PLAY OF THE GAME by banning ${userDiscord.user.username}`);
	},
};