const Discord = require('discord.js');
module.exports = {
    name: 'recetas',
    aliases: ['receta', 'recetanavideña', 'recetasnavideñas', 'receta-navideña', 'recetas-navideñas', 'recetas-nav', 'recetasnav', 'recetanav', 'receta-nav'],
    execute: async (message, args) => {
      if(!args[0]) {
        const embed = new Discord.RichEmbed;
        embed.setColor("RANDOM");
        embed.setTitle("Recetas navideñas para disfrutar en la mesa");
        embed.setDescription("Debes ingresar el nombre de la receta en minúscula y todo junto, por ejemplo pp!receta tostadasfrancesas");
        embed.addField("Fuente:", "https://www.directoalpaladar.com/");
        embed.addField("Recetas disponibles:", "Tostadas francesas\n Canapé de salmón\n Rosas de patata al horno\n Codornices\n Mousse de yogur");
        message.channel.send(embed);
      } else if(args[0] == "tostadasfrancesas") {
        const embed = new Discord.RichEmbed;
       embed.setColor("RANDOM");
        embed.setTitle("Receta de tostadas francesas (Para 2 personas)");
        embed.setThumbnail("https://i.blogs.es/173132/french-toast-tostadas-francesas-navidad-pakus-directo-paladar/1366_2000.jpg");
        embed.addField("Ingredientes", "4 rebanadas gruesas de pan de molde\n 2 huevos\n 4 cucharadas de azúcar\n Esencia de vainilla\n Canela en polvo\n 225 ml de leche entera\n Mantequilla\n Sal");
        embed.addField("Elaboración", "Mezclamos los huevos bien batidos con la leche, el azúcar, la canela y un poco de esencia de vainilla. Añadimos también una pizca de sal.\n Batimos bien y vertemos la mezcla en una bandeja profunda, donde colocaremos las rebanadas de pan para que se empapen bien, dándoles la vuelta de vez en cuando hasta que las rebanadas de pan hayan absorbido todo el líquido.\n Ponemos al fuego una plancha o una sartén grande. Las hacemos a fuego lento para que no se quemen sino que se cocinen también por dentro. Para ello, derretimos un poco de mantequilla y doramos las tostadas francesas por ambos lados, añadiendo un poco más de mantequilla cada vez que pongamos en la plancha una nueva rebanada.");
        embed.addField("Cómo acompañar", "Cualquier acompañamiento dulce va bien a las tostadas francesas, un buen chorrito de sirope de arce o miel, una guarnición de nata montada o de helado o unos pocos frutos rojos.");
        message.channel.send(embed);
      } else if(args[0] == "canapedesalmon") {
        const embed = new Discord.RichEmbed;
        embed.setColor("RANDOM");
        embed.setTitle("Receta de canapé de salmón (Para 4 personas)");
        embed.setThumbnail("https://i.blogs.es/434804/650_1000_canape-salmon-miel-dap/1366_2000.jpg");
        embed.addField("Ingredientes", "100g de salmón ahumado\n 125g de queso crema\n 15ml de nata líquida\n 8 panecillos para canapés\n 15ml de miel\n Hojas de estragón\n Sal y pimienta");
        embed.addField("Elaboración", "Mezclar el queso crema, la nata líquida, la miel y las hojas de estragón en un bowl, agregar sal y pimienta a gusto.\n Tostar unos minutos en el horno si el pan es de miga, o bien si es pan tostado, colocar éstas en una bandeja de servicio.\n Cortar la loncha de salmón ahumado en cuatro rectángulos similares a la forma de las tostas. Extender la crema de queso y miel. Colocar el salmón encima haciendo un pequeño rulo. Servir");
        embed.addField("Cómo acompañar", "Los canapés de salmón, queso crema y miel son deliciosos para una noche como la de navidad, pero también para preparar por su sencillez, en cualquier cena de diario en donde nos apetezca un sabor especial. La mezcla dulce salado es exquisita.");
        message.channel.send(embed);
      } else if(args[0] == "rosasdepatataalhorno") {
        const embed = new Discord.RichEmbed;
        embed.setColor("RANDOM");
        embed.setTitle("Receta de rosas de patata al horno (Para 2 personas)");
        embed.setThumbnail("https://i.blogs.es/d829b2/patatas-flor/1366_2000.jpg");
        embed.addField("Ingredientes", "3 patatas medianas\n 45ml de aceite de oliva virgen extra\n 1 limón\n 5g de sal\n Pimienta negra molida\n Tomillo seco\n Ajo granulado\n Pimientón dulce");
        embed.addField("Elaboración", "Precalentar el horno a 200º y engrasar con aceite una mandeja de mini muffins o moldes pequeños individuales, estilo ramekin, por ejemplo. Pelar las patatas y cortar en láminas muy finas usando una mandolina o un cuchillo. Dejar en un cuenco con agua fría a medida que las vamos sacando y dejar reposar por 10 minutos.\n Sacar las patatas, escurrir y secar bien. Hacer torres con ellas y cortar por la mitad, para obtener medias lunas. Formar tiras de patata colocándolas en fila, superponiendo los extremos, usando aproximadamente 10 mitades. Con cuidado, enrollar sobre sí mismas y llevar al molde, formando las rosas.\n Repetir hasta terminar con las patatas. Pintar con aceite de oliva y zumo de limón al gusto. Salpimentar y añadir un poco de ajo granulado y pimentón. Hornear durante unos 20-25 minutos, hasta que se hayan dorado bien por fuera. Si se queman demasiado rápido, cubrir con papel de aluminio.");
        embed.addField("Cómo acompañar", "Las rosas de patata al horno son una buena guarnición de cualquier plato, ya sea de carne, pescado o una alternativa vegana. Se pueden servir con verduras asadas o también como aperitivo, acompañando algo de queso.");
        message.channel.send(embed);
      } else if(args[0] == "moussedeyogur") {
        const embed = new Discord.RichEmbed;
        embed.setColor("RANDOM");
        embed.setTitle("Receta de mousse de yogur con frutos rojos (Para 7 personas)");
        embed.setThumbnail("https://i.blogs.es/913c27/mousse-de-yogur-con-frutos-rojos/1366_2000.jpg");
        embed.addField("Ingredientes", "250g de yogur griego\n 150g de nata líquida para montar\n 2 claras de huevo\n 50g de azúcar glass\n 50g de mermelada de fresa\n 1 cucharada de agua\n 1 lámina y media de gelatina\n Frutos rojos\n Hojas de menta fresca");
        embed.addField("Elaboración", "Hidratamos la gelatina en un cuenco con agua fría durante 10 minutos. Mientras tanto mezclamos el yogur con el azúcar glass, removiendo hasta que esté cremoso y el azúcar se haya integrado bien.\n Separamos 50 ml de nata y calentamos en el microondas durante 30 segundos. Escurrimos la gelatina, la disolvemos en la nata y dejamos atemperar unos minutos. Añadimos un par de cucharadas de yogur y removemos hasta homogeneizar. Volcamos la mezcla en el recipiente con el yogur y removemos de nuevo.\n Montamos el resto de la nata, que tiene que estar bien fría, y la incorporamos, poco a poco y removiendo con suavidad, al recipiente con el yogur. Montamos las claras a punto de nieve y las agregamos también, con movimientos envolventes para que no se baje el aire incorporado.");
        embed.addField("Elaboración", "Rellenamos tres cuartos de los vasitos con la mousse y dejamos reposar en la nevera durante una hora para que tome cuerpo. Mientras tanto mezclamos la mermelada con el agua y pasamos por un colador para hacer una salsa fina. Repartimos entre todos los vasitos, cubrimos con frutos rojos y decoramos con menta fresca.");
        message.channel.send(embed);
      } else if(args[0] == "codornices") {
        const embed = new Discord.RichEmbed;
        embed.setColor("RANDOM");
        embed.setTitle("Receta de codornices en salsa de mandarina y miel (Para 2 personas)");
        embed.setThumbnail("https://i.blogs.es/efba2f/650_1000_navidad-codornices-mandarina/1366_2000.jpg");
        embed.addField("Ingredientes", "2 Codornices (o 4 pequeñas dependiendo del menú)\n 2 Mandarinas medianas con mucho jugo\n 120ml de caldo de verduras o pollo\n 80ml de vino blanco\n 15ml de miel\n 2 cebollitas francesas\n 4g de maizena\n Pimienta negra molida\n Aceite de oliva virgen extra\n Sal");
        embed.addField("Elaboración", "Lavar y pelar las mandarinas. Retirar toda la parte blanca de la piel que podamos y picar en juliana fina. Poner en un cazo con un dedo de agua, hervir y colar. Repetir la operación. Colocar de nuevo las pieles en una cazuela con la miel y una pizquita de sal. Calentar a fuego medio 2 minutos.\n Añadir el caldo, el vino y el zumo de una de las mandarinas. Incorporar las cebollitas troceadas en cuartos, dar un golpe de pimienta y cocer a fuego lento 15 minutos. Pelar mientras los gajos de la mandarina restante. Agregar a la salsa. Desleír la maizena en agua fría y agregar para espesar. Atar las patitas de las codornices, salpimentar y cocinarlas con un poco de aceite de oliva en una sartén o a la plancha, hasta que estén bien doradas por todos lados. Servir con la salsa caliente a gusto.");
        embed.addField("Cómo acompañar", "Esta receta se puede acompañar con arroz blanco, cuscús o puré de patatas.");
        message.channel.send(embed);
      } else if(args[0] && args[0] != "codornices" && args[0] != "moussedeyogur" && args[0] != "rosasdepatataalhorno" && args[0] != "canapedesalmon" && args[0] != "tostadasfrancesas") {
        message.channel.send("Debes ingresar una de las recetas disponibles todo junto y minúscula, sin tildes");
      }
    },
};
