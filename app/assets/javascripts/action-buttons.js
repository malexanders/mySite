$(document).on('turbolinks:load', function(){
	$('.action-button-container, .cover-action-button-container').click(function(event){
		if(event.target.id === 'projects-scroll'){

			$('html,body').animate({
				scrollTop: $('.parallax-static-content').offset().top
			});
		} else if (event.target.id === 'music-scroll') {
			alert(event.target.id);
			$('#modal-1').prop('checked', true);
			// $('#modal-1').attr('checked', 'checked');
		}
	})
})
