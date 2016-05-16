class ContactsController < ApplicationController
	before_action :new_contact

	def create
		@contact = Contact.create(fact_params)
		if @contact.save
			flash[:notice] = 'Thank you for signing up!'
			redirect_to root_path
			respond_to do |format|
				format.html {}
				format.json {}
			end
		else
			flash.now[:alert]= @contact.errors.full_messages.to_sentence
			# redirect_to root_path
			respond_to do |format|
				format.html {}
				format.js {}
			end

		end

	end

	private

	def fact_params
	  params.require(:contact).permit(:name, :email)
	end

	def new_contact
		@contact = Contact.new
	end
end
