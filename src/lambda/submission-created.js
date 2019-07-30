const SG_KEY = process.env.SENDGRID_API_KEY

const client = require("@sendgrid/mail");

exports.handler = function(event, context, callback) {
  client.setApiKey(process.env.SENDGRID_API_KEY);

  let data = JSON.parse(event.body).payload.data;

  const msg = {
    to: 'isaacrwasserman@gmail.com',
    from: data.email,
    subject: 'New message from ' + data.name,
    text: data.name + " sent you a message from philadanceprojects.org: \n" + data.message + "\n\n reply to " + data.email,
  };
  client.send(msg);
};
