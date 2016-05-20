class MessagesController < ApplicationController


  def create
	  @message = Message.create(message_params)
	  if @message.save
		  flash.now[:notice] = 'Thank you for your message - I will get back to you shortly!'
		  respond_to do |format|
			  format.html{}
			  format.js{}
		  end
	  else
		  respond_to do |format|
			  format.html{}
			  format.js{}
		  end
	  end
  end

  private

  def message_params
	  params.require(:message).permit(:first_name, :last_name, :email, :phone, :content)
  end




end
