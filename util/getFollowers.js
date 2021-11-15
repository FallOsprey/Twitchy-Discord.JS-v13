var fetch = require('node-fetch');

const ClientID = '81ws43kaah5gxsp2gzgzfer7wx6yzd'
const Auth = 'qki5vnnz1abx6eid9jqciyio6cjnty'

module.exports = function getFollowers(channelID) {
    return fetch(`https://api.twitch.tv/helix/users/follows?to_id=${channelID}`, { 
    // https://dev.twitch.tv/docs/api/reference#get-users-follows
        headers: {
            'Authorization': `Bearer ${Auth}`,
            'Client-Id': ClientID
        }
    }).then(result => result.json())
  }