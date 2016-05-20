class ContactsController < ApplicationController
	before_action :new_contact

	def create
		@contact = Contact.create(contact_params)
		if @contact.save
			flash.now[:notice] = 'Thank you for signing up!'
			# redirect_to root_path
			respond_to do |format|
				format.html {}
				format.js {}
			end
		else
			flash.now[:alert]= @contact.errors.full_messages.to_sentence
			respond_to do |format|
				format.html {}
				format.js {}
			end
		end

	end

	private

	def contact_params
	  params.require(:contact).permit(:name, :firstname, :lastname, :phonenumber, :email, :message)
	end

	def new_contact
		@contact = Contact.new
	end
end
