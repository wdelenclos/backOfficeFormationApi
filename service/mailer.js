const nodemailer = require('nodemailer');

module.exports = class Mailer{
	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
			  user: 'insteat@gmail.com',
			 pass: 'cscmqcbiryzuafnq'
			}
		  });
  	}

  	send(userEmail){
		var mailOptions = {
			from: 'insteat@gmail.com',
			to: userEmail,
			subject: 'Minor receiver',
			text: 'You are minor!'
		  };

		  this.transporter.sendMail(mailOptions, function(error, info){
			if (error) {
			  console.log(error);
			} else {
			  console.log('Email sent: ' + info.response);
			}
		  });
  	}
}