//This is the main file which is responsible for the functioning of our bot

const Disc = require('discord.js');//This declaration is responsible for the implementation of discord.js libraries and functions

const cl = new Disc.Client(); //Here we identify our bot as a new client in discord server

const pre = '!'; //This is a repfix which is used by a bot to identify a command

cl.once('ready',()=>{
    console.log('The bot is running...') //This is an event function that displays a message at the console log when the bot is active
});

cl.on('message', message =>{
    if (!message.content.startsWith(pre) || message.author.bot) return; //This condition checks whther a given message in the channel is a command for the bot or not.

    const args = message.content.slice(pre.length).split(" "); //Here we replace our prefix with whitespaces so that it can be easily compared wit other strings

    //declaring commands

    if(args[0] == 'hello')message.channel.send('hey there!');
    else if(args[0] == 'ping'){
        message.channel.send(`Latency of the network is ${Date.now() - message.createdTimestamp} ms. API latency is ${Math.round(cl.ws.ping)} ms`);
    }

    else if(args[0] == 'clear'){
        if(!args[1])message.channel.send('Please enter the amount of chats you want to delete');
        else message.channel.bulkDelete(args[1]);

    }

    else if(args[0] == 'info'){
        if(!args[1])message.channel.send('I am a bot...');
        else if(args[1] == 'author'){message.channel.send('Saaransh Shandilya');}
        else if(args[1] == 'framework'){message.channel.send('Node.js');}
    }
});

cl.login('ODA1NTQ1MjQyNjM5MzM1NDQ1.YBcceA.OFjsHMDi5qNc5E7qBR7YK14xpd4');
