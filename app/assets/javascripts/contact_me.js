$(document).on('turbolinks:load', function(){
	$('#message-submit').on('click', function(event){
		MyGlobal.spinner();
	})
})
