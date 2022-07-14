const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'pie',
    description: 'PIE!!',
    execute(message,args){
     const responses = [
        "https://www.unpetitoiseaudanslacuisine.com/wp-content/uploads/2019/11/IMG_8153-scaled.jpg",
        "https://toriavey.com/images/2011/08/IMG_1435-scaled.jpg",
        "https://cdn.mos.cms.futurecdn.net/SQqamv96qx6Qb8P4HyTLgM.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/strawberry-pie-recipe-1648660021.jpeg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chocolate-pie-1599234048.jpg"
     ];
     const embed  = new MessageEmbed()
     .setColor("#ec8fcc")
     .setTitle(`This is pie's favourite pie..`)
     .setImage(url=`${responses[Math.floor(Math.random() * responses.length)]}`)
    message.channel.send({embeds:[embed]});


    },
};