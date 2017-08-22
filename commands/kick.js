exports.run = (client, message, [mention, ...reason]) => {
  const config = require("../config.json");
  if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
    message.reply("you lack kicking perms")
    return message.reply("");
  }
  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kick");
  } else {
  const kickMember = message.mentions.members.first();
    console.log(kickMember.id, kickMember.username)
    if (message.author.id === kickMember.id) {
      return message.reply(`You can't kick yourself.`);
    }
    if (config.ownerID === kickMember.id) {
      return message.reply(`You can't kick ` + kickMember.nickname + ` ! -_-"`);
    }
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`);
    });
  }
};
