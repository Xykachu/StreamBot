//const Discord = require('discord.js');
const fs = require('fs');
const {Client, Intents, Collection, MessageEmbed} = require('discord.js');
const {prefix, token,apiToken} = require('./config.json');
const axios = require("axios");



const client = new Client({intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MEMBERS]});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file=> file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready',()=> {
    console.log(`${client.user.tag} has logged in`);
});
 
const allCommands =Array.from(client.commands.keys());


client.on('messageCreate',message =>{
    if(!message.content.startsWith(prefix)|| message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    var output = " ";
    let embed = new MessageEmbed()
    .setColor("#eca6ff")
    .setTitle("Available Commands: ")
    .setDescription(`use ! before each command`)
    .addField(`meow`,"meow");

    if(commandName === "commands"){
        allCommands.forEach(element=>{
    output +=  " " + element + " ";
    embed = new MessageEmbed()
    .setColor("#eca6ff")
    .setTitle("Available Commands: ")
    .setDescription(`use ! before each command`)
    .addField(output,"**");
        });
        message.reply({embeds:[embed]})
    }

if (!client.commands.has(commandName)) {
		
    return; //if command doesnt exist. return
}

const command = client.commands.get(commandName); 

try {
    command.execute(message, args,client); //try to execute
} catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!'); 
}

});

client.login(token);