$(document).on('turbolinks:load', function(){
	$('.action-button-container').click(function(event){


		if(event.target.id === 'projects-scroll'){
			alert("do stuff with projects");
			$('html,body').animate({
				scrollTop: $('.parallax-static-content').offset().top
			});
		} else if (event.target.id === 'music-scroll') {
			alert("do stuff with music");
			$('#modal-1').prop('checked', true);
		}

	})
})
