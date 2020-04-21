// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC08ece048e03c6811cdddfdbfb93f8050'; //pull this from your twillio console
const authToken = 'your_auth_token'; //pull this from your twillio console
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hi there, this is Grocery assists sending sms test!',
     from: '+15017122661', //placeholder number, use your twillio number created
     to: '+15558675310' //use your number to receive texts
   })
  .then(message => console.log(message.sid));