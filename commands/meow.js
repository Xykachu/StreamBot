
module.exports={
    name: 'meow',
    description: 'meow!!',
    execute(message,args){
        message.channel.send("meow");
        console.log("meow");
    },
};