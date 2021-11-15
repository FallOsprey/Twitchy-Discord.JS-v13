var fetch = require('node-fetch');

const ClientID = '81ws43kaah5gxsp2gzgzfer7wx6yzd'
const Auth = 'qki5vnnz1abx6eid9jqciyio6cjnty'

module.exports = {
	name: "validate",
	description: "Checks token.",
	args: false,
	ownerOnly: true,

	execute(message, args) {
        fetch('https://id.twitch.tv/oauth2/validate', {
            headers: {
                'Authorization': `Bearer ${Auth}`,
                'Client-Id': ClientID
            }
          })
          .then(res => res.json())
            .then((res) => {
                console.log(res)
            })

	},
};