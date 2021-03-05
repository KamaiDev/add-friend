const fetch = require('node-fetch');
const userToken = 'SUA TOKEN AQUI';
const bodyRelationship = {"username":"NOME","discriminator":0000};

fetch(`https://discord.com/api/v8/users/@me/relationships`, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					authorization: `${userToken}`,
					'content-type': 'application/json'
				}
			})
