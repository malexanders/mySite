$(document).on('turbolinks:load', function(){
	$('#subscribe-bar').click(function(event){
		event.preventDefault();
		
		if(event.target.id === 'contact-submit'){
			$('#subscribe-form').trigger('reset');
		}
	})
});
