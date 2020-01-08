module.exports = {
    name: 'borrar',
  guildOnly: true,
    aliases: ['delete', 'clean', 'prune'],
	execute(message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes suficientes permisos para ejecutar este comando");
        if(!args[0]) return message.channel.send("Cuántos mensajes tengo que borrar?");
        let number = args[0];
        if(isNaN(number)) return message.channel.send("No se permiten letras o símbolos");
        number = parseInt(number);
        if(number >= 100 || number <= 0) return message.channel.send("Debes ingresar un valor entre 0 y 99");
        message.channel.bulkDelete(number + 1).then(() => {
            message.channel.send(`Se desintegraron ${number} mensajes con las gemas del infinito`).then(m => m.delete(5000));
        }).catch(error => {
            message.channel.send("Pipa usó BORRAR");
          message.channel.send("¡Pero falló!");
          message.channel.send(`Razón: ${error.message}`)     
        });
    },
};