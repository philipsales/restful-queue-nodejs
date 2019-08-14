'use strict';

const axios = require('axios');
const querystring = require('querystring');
const twilio_sid =  process.env.TWILIO_ACCOUNT_SID;
const twilio_token =  process.env.TWILIO_AUTH_TOKEN;
const twilio_content_type =  process.env.TWILIO_CONTENT_TYPE;
const twilio_number =  process.env.TWILIO_NUMBER;
const twilio_messages_url =  process.env.TWILIO_MESSAGES_URL;
const auth = "Basic " + new Buffer
	.from(twilio_sid + ":" + twilio_token)
	.toString("base64");

axios.defaults.headers.common['Authorization'] = auth
axios.defaults.headers.post['Content-Type'] = twilio_content_type;

class TwilioREST{

	sendMessage(message, recipient){
		var url = twilio_messages_url+"/"+twilio_sid+"/Messages.json";
		var data = {};

		data["From"] = twilio_number;
		data["Body"] = message;
		data["To"] = recipient;

		return new Promise((resolve,reject) => {
			axios.post(url, querystring.stringify(data))
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
		});
	}
}

module.exports = TwilioREST;