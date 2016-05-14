$(document).on('turbolinks:load', function(){
	$('#subscribe-bar').click(function(event){
		event.preventDefault();
		$('#subscribe-form').trigger('reset');
	})
});
