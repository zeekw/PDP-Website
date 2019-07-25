const SG_KEY = process.env.SENDGRID_API_KEY

const client = require("@sendgrid/mail");

exports.handler = function(event, context, callback) {
  client.setApiKey(process.env.SENDGRID_API_KEY);

  let data = JSON.parse(event.body).payload.data;

  const msg = {
    to: 'isaacrwasserman@gmail.com',
    from: data.email,
    subject: 'New message from ' + data.name,
    text: data.message,
  };
  client.send(msg);
};
