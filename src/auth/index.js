const AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-north-1"
});

const secrets = {"username": "user", "password": "sala"};

exports.handler = async (event) => {
  console.log("EVENT: " + JSON.stringify(event));

  if (!(event &&
  	event.headers &&
  	event.headers.Authorization)) {
  	console.error("Missing authorization header");
  	return "Unauthorized";
  }

  const b64Creds = (event.headers.Authorization).split(' ')[1];
  const plainCreds = Buffer.from(b64Creds, 'base64').toString().split(':');

  if (plainCreds[0] != secrets.username || plainCreds[1] != secrets.password) {
  	return "Unauthorized";
  }

  const response = {
  	statusCode: 200,
  	body: JSON.stringify(allowAllPolicy(event.methodArn, plainCreds[0]))
  };
  return response;
};

var allowAllPolicy = (apiGatewayArn, principalId) => {
	return {
		principalId: principalId,
		policyDocument: {
			Version: '2012-10-17',
			Statement: [
				{
					Action: 'execute-api:Invoke',
					Effect: 'Allow',
					Resource: [apiGatewayArn]
				}
			]
		}
	};
};

/*
Seuraavaksi:
- mockaa eventiin methodArn
- laita environmentiin secrets manager secretti ja autentikoi sitä vasten
- mockaa secrets manager
*/