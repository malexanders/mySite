class StaticPagesController < ApplicationController
  def home
    @contact = Contact.new
	@message = Message.new
  end

  def portfolio
  end

  def blog
  end

  def music
  end

  def contact
  end
end
