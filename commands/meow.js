
module.exports={
    name: 'meow',
    description: 'meow!!',
    execute(message,args){
        let string = "meow ";
        let count = Math.floor(Math.random() * 69);
        let meow = count ? string.repeat(count) :string;
        if(count == 69){
            message.channel.send("woof!");
        }
        else{
            message.channel.send(meow);
        }
       
        console.log("meow");
    },
};