const config = require('../../config.json')
const fetch = require('node-fetch');
const moment = require('moment')
const { MessageEmbed } = require("discord.js");

const getBasicChannelData = require('../../util/getBasicChannelData.js')
const getFollowers = require('../../util/getFollowers.js')
const log = require("../../bot.js");

module.exports = {
    name: "channel",
    description: 'Get information for a Twitch channel.',

    async execute(message, args) {
        if (args[0]){
        let x = await getBasicChannelData(args[0])
        if (x.data[0]){ // Data exists and there is information
        let y = await getFollowers(x.data[0].id)
        let streamerName = x.data[0].display_name
        let channelID = x.data[0].id
        let broadcasterType = x.data[0].broadcaster_type || "Normal"
        let viewCount = x.data[0].view_count
        let profileImage = x.data[0].profile_image_url
        let createdAt = x.data[0].created_at
        let createdAtDate = moment.utc(`${createdAt}`).format("MMM Do, YYYY")
        const totalFollowers = y.total // Maybe make it say "None" instead of 0?????
        let channelEmbed = new MessageEmbed()
        .setTitle(`:link: ${streamerName}'s Channel`)
        .setThumbnail(`${profileImage}`)
        .setColor('#a52183')
        .setURL(`https://twitch.tv/${streamerName}`)
        .setDescription(`**➔ Channel Name:** ${streamerName}\n**➔ Channel ID:** ${channelID}\n**➔ Streamer Type:** ${broadcasterType}\n**➔ Total Views:** ${viewCount}\n**➔ Followers:** ${totalFollowers}\n**➔ Created On:** ${createdAtDate}`)
         message.channel.send({ embeds: [channelEmbed] })   


        } else { // Specified User does not exist since data comes back as []
            const embed = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`, `Sorry! I was unable to find the channel: \`${args[0]}\``)
            message.channel.send({ embeds: [embed] })  
            return;
        }
    } else {
        const embed = new MessageEmbed()
        .setColor('RED')
        .addField(`Error!`, `You must provide a channel name.`)
        message.channel.send({ embeds: [embed] })   
        return;
    }
        log('EXECUTION', `${message.author.tag} (${message.author.id}) ran command: [ ${message} ] in ${message.guild.name}.`)
    },
};