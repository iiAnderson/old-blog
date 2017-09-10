;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};



	// Carousel Feature Slide
	var owlCrouselFeatureSlide = function() {
		
		var owl = $('.owl-carousel');

		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
			$(elem.target).find(".owl-item").eq(current).find(".to-animate-2").removeClass('fadeInUp animated');
		
		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 700);
			setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInUp animated');
			}, 900);
     	});
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    autoHeight: true,
		    smartSpeed: 500,
		    autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		    navText: [	
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	]
		});

	};



	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
			
				$(this.element).addClass('fadeInUp animated');
			
			}

		} , { offset: '75%' } );

	};


	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.nav-mobile-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}

			event.preventDefault();

		});

	};



	// Page Nav
	var clickMenu = function() {

		$('a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');
		    $('html, body').animate({
		        scrollTop: $('[data-section="' + section + '"]').offset().top
		    }, 500);

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.nav-mobile-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});

	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};
	var navigationSection = function() {

		var $section = $('div[data-section]');
		
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		    
		  	}
		}, {
		  	offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};



	// Animations

	var aboutAnimate = function() {

		if ( $('#about-me').length > 0 ) {	
			$('#about-me .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var aboutWayPoint = function() {

		if ( $('#about-me').length > 0 ) {
			$('#about-me').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(aboutAnimate, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};


	// Services
	var experiencesAnimate = function() {

		if ( $('#experiences').length > 0 ) {
			$('#experiences .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}

	};
	var experiencesWayPoint = function() {

		if ( $('#experiences').length > 0 ) {
			$('#experiences').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(experiencesAnimate, 200);


					$(this.element).addClass('animated');

				}
			} , { offset: '95%' } );
		}

	};


	// Features
	var skillsAnimate = function() {

		if ( $('#skills').length > 0 ) {
			$('#skills .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}

	};
	var skillsWayPoint = function() {

		if ( $('#skills').length > 0 ) {
			$('#skills').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(function(){
						$('.animate-skills-1').addClass('animated fadeIn');
					}, 100);
					setTimeout(function(){
						$('.animate-skills-2').addClass('animated fadeIn');
					}, 200);
					setTimeout(skillsAnimate, 500);
					setTimeout(function(){
						$('.animate-skills-3').addClass('animated fadeInUp');
					}, 1400);


					$(this.element).addClass('animated');

				}
			} , { offset: '95%' } );
		}

	};


	// accolades
	var accoladesAnimate = function() {

		if ( $('#accolades').length > 0 ) {
			$('#accolades .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}

	};
	var accoladesWayPoint = function() {

		if ( $('#accolades').length > 0 ) {
			$('#accolades').waypoint( function( direction ) {


					setTimeout(accoladesAnimate, 200);


					$(this.element).addClass('animated');


			} , { offset: '95%' } );
		}

	};

	// Pricing
	var pricingAnimate = function() {

		if ( $('#pricing').length > 0 ) {
			$('#pricing .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}

	};
	var pricingWayPoint = function() {

		if ( $('#pricing').length > 0 ) {
			$('#pricing').waypoint( function( direction ) {

					setTimeout(function(){
						$('.animate-pricing-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-pricing-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pricingAnimate, 700);


					$(this.element).addClass('animated');


			} , { offset: '95%' } );
		}

	};

	// Pricing
	var projectsAnimate = function() {

		if ( $('#projects').length > 0 ) {
			$('#projects .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );

			});
		}

	};
	var projectsWayPoint = function() {

		if ( $('#projects').length > 0 ) {
			$('#projects').waypoint( function( direction ) {

					setTimeout(function(){
						$('.animate-projects-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-projects-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(projectsAnimate, 700);


					$(this.element).addClass('animated');


			} , { offset: '95%' } );
		}

	};





	// Document on load.
	$(function(){

		burgerMenu();
		owlCrouselFeatureSlide();
		clickMenu();
		windowScroll();
		navigationSection();

		aboutWayPoint();
		experiencesWayPoint();
		skillsWayPoint();
		accoladesWayPoint();
		projectsWayPoint();

	});


}());