const Discord = require('discord.js');
const prefix = "pp!"
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('PipaBOT is now ENABLED');
  client.user.setPresence({
    status: "online",
    game: {
        name: "pp!help / Versión 1.1.2",
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
        message.reply('Hubo un error intentando ejecutar ese comando');
    }
    if(command.guildOnly && message.channel.type !== 'text') {
        return message.reply('No puedo ejecutar ese comando en DM');
    }
});

client.login(process.env.token);
