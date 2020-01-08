const Discord = require('discord.js');
const prefix = "pip!";
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Pipa/Essentials/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./Pipa/Essentials/commands/${file}`);
    
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('PipaBOT 1.0.1 (Patch 1) is now ON');
  client.user.setPresence({
    status: "online",
    game: {
        name: "pip!help / Version 1.0.1",
        type: "LISTENING"
    }
})
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('An error ocurred while trying to execute that command');
    }
    if(command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command in DM');
    }
});

client.login(process.env.token);