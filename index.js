const AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-north-1"
});

exports.handler = async event => {
  console.log("EVENT: " + JSON.stringify(event));
};