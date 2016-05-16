$(document).on('turbolinks:load', function(){

    $('#flash-messages').delay(5000).fadeOut(400);
    $('#flash-messages').on('click', function(e) {
    e.preventDefault();
    $( this ).hide();
  });


    //If on landing page, make flash message centered on top of the page.
    var path = window.location.pathname

    if (path === '/'){
        $('#flash-messages').css({
            top: 5,
            width: '35%',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
			position: 'absolute',
			top: '35%',
			zIndex: '9999999'

        })

    }
});
