class MessageMailer < ApplicationMailer

	default from: "Your Mailer <noreply@yourdomain.com>"
	# default to: "Your Name <matthewalexander108@gmail.com>"
	default to: "matthewalexander108@gmail.com"

	def new_message(message)
	  @message = message
	  mail subject: "Message from #{message.first_name} #{message.last_name}"
	end

end
