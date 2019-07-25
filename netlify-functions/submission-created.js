const SG_KEY = process.env.SENDGRID_API_KEY

const helper = require('sendgrid').mail

exports.handler = (event, context, callback) => {
	let submissionBody = JSON.parse(event.body).payload

  let from_email = new helper.Email(payload.data.email);
  let to_email = new helper.Email('isaacrwasserman@gmail.com');

  let subject = payload.data.name + " sent you a message";

  let content = subject + ': \n \n' + payload.data.message + '\n \n Reply to: ' + payload.data.email
  let mail = new helper.Mail(from_email, subject, to_email, content)

  let sg = require('sendgrid')(SG_KEY)

  let request = sg.emptyRequest({
    method: 'POST',
		path: '/v3/mail/send',
		body: mail.toJSON()
  })

  sg.API(request, function(error, response){
    if(error){
      console.log(error.response.body)
    }
  })
}
