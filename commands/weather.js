const { MessageEmbed, MessageSelectMenu } = require("discord.js")
const {apiToken} = require('../config.json');
const axios = require("axios");
module.exports = {
    name: 'weather',
    description: 'check the weather for any city',
    execute(message,args){
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apiToken}`;
        let currentTemp = 0;
        let cityName = "bla";
        let country = "dubdub";
        let currentTime = "uwu";
          const embed =  new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`There is ${currentTemp}\u00B0 C in ${cityName}, ${country}`)
                .addField(`Local Time:`, `${currentTime}`, true);
            
                axios
                .get(apiUrl)
                .then(response => {
                    let apiData = response
                    let currentTemp = Math.ceil(apiData.data.main.temp)
                    let cityName = args
                    let country = apiData.data.sys.country
                    let currentTime = apiData.data.dt
                    const embed =  new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`There is ${currentTemp}\u00B0 C in ${cityName}, ${country}`)
                .addField(`Local Time:`, `69`, true);
                    message.channel.send({embeds:[embed]});
                }).catch(err => {
                    message.reply(`Enter a vailid city name`)
                    console.log(args);
                    console.log(apiUrl);
                    console.log(err)
                })

    },
};