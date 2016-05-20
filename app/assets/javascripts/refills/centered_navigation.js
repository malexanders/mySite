$(document).on('turbolinks:load', function() {
    $('.nav-link').click(function(event){
        event.preventDefault();
        //alert(event.target.id);
        var navHeight = $('.mobile-logo').height();
        if(event.target.id === 'about-me-scroll'){
            menuToggle.trigger('click');
            $('html,body').animate({
                scrollTop: $('#about-me').offset().top - navHeight
            });
        } else if (event.target.id === 'skills-scroll') {
            menuToggle.trigger('click');
            $('html,body').animate({
                scrollTop: $('#skills-title').offset().top - navHeight
            });
        } else if (event.target.id === 'projects-scroll'){
            menuToggle.trigger('click');
            $('html,body').animate({
                scrollTop: $('.parallax-static-content').offset().top
            });
        } else if (event.target.id === 'contact-scroll') {
			menuToggle.trigger('click');
			$('html,body').animate({
                scrollTop: $('.message-input-container').offset().top - navHeight
            });
        }
    })

    // I realize this isn't a very DRY solution...
    // I plan to move all the CSS property assignments to the centered_navigation.scss file
    // Use use javascript to apply classes based on scroll height
    // And SASS media queries to apply css based on screen width

	MyGlobal.navVar = function(){
		this.docScroll = $(document).scrollTop();
		this.screenWidth = $(window).width();
		this.topHeight = "100px";
		this.topHeightScale = 100 / 1.27;
		this.lowHeight = "75px";
		this.transitionSpeed = "300ms";
		this.grabWindowWidth = function(){
			var me = this;
			$(window).resize(_.bind(function(){
				//console.log(this);
				this.screenWidth = $(window).width();
                this.setNavSize();
                if(this.screenWidth > 960) {
                    $('li.nav-link').css({
                        'position': 'relative',
                        'top': '0em',
                        'line-height': '3em',
                        "transition": "all " + this.transitionSpeed + " ease"
                    })
                }
			}, this));
		};
		this.grabScroll = function(){
			$(document).on('scroll', _.bind(function(){
				this.docScroll = $(document).scrollTop();
    				if(this.docScroll < 1 && this.screenWidth > 760 ){
						// alert('scroll = 0!');
						this.applyTopNavStyles();
                        $('#js-centered-navigation-menu').removeAttr('style');

					} else if(this.docScroll > 25 && this.screenWidth > 760 ){
						// alert("asdfsd");
						this.applyLowerStyles();
                        $('#js-centered-navigation-menu').removeAttr('style');
					}
			}, this));
		};
		this.applyTopNavStyles = function(){
			$('.centered-navigation').css({
				"min-height": this.topHeight,
				"opacity":'1',
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.mobile-logo').css({
				"maxHeight": this.topHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.mobile-logo img').css({
				"maxHeight": this.topHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.centered-navigation-mobile-menu').css({
				"line-height": this.topHeight,
				"maxHeight": this.topHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.centered-navigation-wrapper h1').css({
				'lineHeight': this.topHeight,
				'maxHeight': this.topHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('ul li.navlink').css({
				'lineHeight': this.topHeightScale + "px",
			});

			$('li.nav-link').css({
				'position':'relative',
				'top':'0em',
				"transition": "all " + this.transitionSpeed + " ease"
			});

            $('.centered-navigation-menu a').css({
                'height':this.topHeight,
                'line-height': this.topHeight,
                'position':'relative',
                'top':'0em'
            });
			$('#js-centered-navigation-menu').css({
				'position':'relative',
				'top':'0em'
			});

			$('#js-centered-navigation-mobile-menu').css({
				'postion':'relative',
				'top':'0em',
                "transition": "all " + this.transitionSpeed + " ease"
			});

            $('.temp-spacer').css({
                "height":"90px",
                "transition": "all " + this.transitionSpeed + " ease"
            });
		};
		this.applyLowerStyles = function(){

			$('.centered-navigation').css({
				'position':'fixed',
				'min-height':this.lowHeight,
				//'opacity':'0.9',
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.mobile-logo').css({
				"maxHeight": this.lowHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.mobile-logo img').css({
				"maxHeight": this.lowHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.centered-navigation-mobile-menu').css({
				"lineHeight": this.lowHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

			$('.centered-navigation-wrapper h1').css({
				'lineHeight': this.lowHeight,
				'maxHeight': this.lowHeight,
				"transition": "all " + this.transitionSpeed + " ease"
			});

            if(this.screenWidth > 960){
                $('li.nav-link').css({
                    'position':'relative',
                    'top': '0em',
                    'line-height':'3em',
                    "transition": "all " + this.transitionSpeed + " ease"
                });
            } else{
                $('li.nav-link').css({
                    'position':'relative',
                    'top': '-0.5em',
                    'line-height':'3em',
                    "transition": "all " + this.transitionSpeed + " ease"
                });
            }

            $('.centered-navigation-menu a').css({
                'height': this.lowHeight,
                'line-height': this.lowHeight,
                'position':'relative',
                'top':'0em',
                "transition": "all " + this.transitionSpeed + " ease"

            });

			$('#js-centered-navigation-menu').css({
				'position':'relative',
				"transition": "all " + this.transitionSpeed + " ease",
				'top':'1em',
				'line-height':'1em',
				'height':'1em'
			});

			$('#js-centered-navigation-mobile-menu').css({
				'position':'relative',
				"transition": "all " + this.transitionSpeed + " ease",
				'top':'0em'
			});

            $('.temp-spacer').css({
                "height":"75px"
            });
		};

		this.largeNavPositionCorrect = function(){
			// $('#js-centered-navigation-menu').css({
			// 	'position':'relative',
			// 	'top':'0.7em'
			// })
		};
        this.setNavSize = function(){
            if(this.screenWidth > 760 && this.docScroll < 10){
                //this.largeNavPositionCorrect();

                this.applyTopNavStyles();
                $('#js-centered-navigation-menu').removeAttr('style');
                this.scale = "large";
            }
            if(this.screenWidth < 760){
                //alert("smallSCreen");
                this.applyLowerStyles();
                $('#js-centered-navigation-menu').removeAttr('style');
                this.scale = "small";
            }
        }
	};

	var navControl = new MyGlobal.navVar();
	navControl.grabWindowWidth();
	navControl.grabScroll();
    navControl.setNavSize();
	 //if(navControl.docScroll < 10){
	 //	navControl.applyTopNavStyles();
	 //}

	var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
	$('#js-centered-navigation-menu').removeClass("show");

	menuToggle.on('click', function(e) {
		e.preventDefault();

		$('#js-centered-navigation-menu').slideToggle(function(){
			if($('#js-centered-navigation-menu').is(':hidden')) {
				$('#js-centered-navigation-menu').removeAttr('style');
			}
		});
	});
});
