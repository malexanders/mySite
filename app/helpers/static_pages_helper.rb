module StaticPagesHelper

  def subscribe_errors

    (if @contact.errors[:name].any?
      byebug
        "<%= f.text_field :name, id: 'subscribe_input_name', placeholder: 'FULLNAME', class: 'error' %>"
    else
        "<%= f.text_field :name, id: 'subscribe_input_name', placeholder: 'FULLNAME' %>"
    end).to_s.html_safe

  end


end
