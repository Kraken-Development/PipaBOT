//  ALL COMMANDS AND THEIR CONTENT WILL BE IN SPANISH
//  TODOS LOS COMANDOS Y SU CONTENIDO ESTARÁ EN ESPAÑOL
//  LOS COMANDOS SE ENCUENTRAN EN GITHUB: PipaBOT/Essentials/Commands
const Discord = require('discord.js');
const fs = require('fs');
const prefix = 'pb!';
console.log('PipaBOT 1.1.5-beta está alojado en PipaBETA el cual es una versión que aún no se ha lanzado, ésta versión puede contener muchos errores. Úselo bajo su propio riesgo');
const client = new Discord.Client();
const ownerID = '395077110814867456';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('PipaBOT 1.1.5-beta is now ENABLED');
  client.user.setPresence({
    status: "online",
    game: {
        name: "pb!help / Versión 1.1.5-beta",
        type: "LISTENING",
    },
});
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    try {
        command.execute(message, args, client);
    } catch (error) {
        console.log(error);
        message.reply('Hubo un error intentando ejecutar el comando, revisa la consola para más información');
    }
    if(command.guildOnly && message.channel.type !== 'text') {
        return message.reply('No puedo ejecutar este comando en MD');
    }

});

client.login(process.env.TOKEN);
