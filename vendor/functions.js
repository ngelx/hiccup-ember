/*
	Project Name : NSure

	## Document Ready
		- Scrolling Navigation
		- Responsive Caret
		- Remove p empty tag for Shortcode

	## Window Load
		- Site Loader
*/

(function($) {

	"use strict"

	/* Google-map-black & white */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'images/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"), 10);
		var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}

		map = new google.maps.Map(document.getElementById(obj), mapOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		infowindow = new google.maps.InfoWindow({
			content: contentString
		});

        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();
		var window_width = $(window).width();
		var container_width = $(".main-container").width();
		var menu_left = ((window_width - container_width) / 2);

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			if( window_width > 991 ) {
				$('.top-strip').addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
			}
			//$(".menu-block.navbar-fixed-top").css("left", menu_left);
			if( window_width < 992 ) {
				$('.menu-block').addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
			}
		}
		else if ( scroll <= height )
		{
			if( window_width > 991 ) {
				$('.top-strip').removeClass("navbar-fixed-top animated fadeInDown");
			}
			if( window_width < 992 ) {
				$('.menu-block').removeClass("navbar-fixed-top animated fadeInDown");
			}
		}
		else
		{
			if( window_width > 991 ) {
				$('.top-strip').removeClass("navbar-fixed-top animated fadeInDown");
			}
			if( window_width < 992 ) {
				$('.menu-block').removeClass("navbar-fixed-top animated fadeInDown");
			}

		} // set sticky menu - end

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});

	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {

		/* - Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			if( window_width > 991 ) {
				$('.top-strip').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
			}
			if( window_width < 992 ) {
				$('.menu-block').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
			}
		}
		else if ( scroll <= height )
		{
			if( window_width > 991 ) {
				$('.top-strip').removeClass("navbar-fixed-top");
			}
			if( window_width < 992 ) {
				$('.menu-block').removeClass("navbar-fixed-top");
			}
		}
		else
		{
			if( window_width > 991 ) {
				$('.top-strip').removeClass("navbar-fixed-top");
			}
			if( window_width < 992 ) {
				$('.menu-block').removeClass("navbar-fixed-top");
			}
		} // set sticky menu - end

		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');

		/* Find all anchors */
		$('#navbar').find('a[href]').each(function(i,a) {

			var $a = $(a);
			var href = $a.attr('href');

			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+'#') == 0 ) {

				/* remove URI from href */
				href = href.replace(url,'');

				/* update anchors HREF with new one */
				$a.attr('href',href);
			}
		});

		/* Add Easing Effect on Section Scroll */
		/*
		$('.navbar-nav li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])').on('click', function() {

			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {

					$('html, body').animate( { scrollTop: target.offset().top - 83 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});
		*/
		$('#back-to-top').on("click",function()
		{
			// When arrow is clicked
			$('body,html').animate(
			{
				scrollTop : 0 // Scroll to top of body
			},800);
		});

		/* - Responsive Caret */
		$('.ddl-switch').on('click', function() {

			var li = $(this).parent();

			if ( li.hasClass('ddl-active') || li.find('.ddl-active').length !== 0 || li.find('.dropdown-menu').is(':visible') ) {
				li.removeClass('ddl-active');
				li.children().find('.ddl-active').removeClass('ddl-active');
				li.children('.dropdown-menu').slideUp();
			}
			else {
				li.addClass('ddl-active');
				li.children('.dropdown-menu').slideDown();
			}
		});

		/* - Remove p empty tag for Shortcode */
		$( 'p' ).each(function() {
			var $this = $( this );
				if( $this.html().replace(/\s|&nbsp;/g, '').length == 0) {
				$this.remove();
			}
		});

		/* -- Menu Block */
		var window_width = $(window).width();
		/*var window_height = $(window).height();*/
		var container_width = $(".main-container").width();
		var menu_left = ((window_width - container_width) / 2);
		$(".menu-block.menu-open").css("left", menu_left);
		if( $(".menu-block.menu-open").length ) {
			if( window_width > 1479) {
				$(".menu-block").css("left", menu_left);
			}
		}
		if( window_width < 992) {
			$(".menu-block").css("left", menu_left);
		}
		if( $(".top-strip.navbar-fixed-top").length ) {
			if( window_width > 1479) {
				$(".top-strip.navbar-fixed-top").css("right", menu_left);
			}
		}

		/* -- Menu Bar */
		$(".menu-bar").on("click", function(e) {
			$(".menu-bar").addClass("active");
			$(".menu-bar-close").addClass("active");
			$(".menu-block").addClass("menu-open");
			$(".menu-block.menu-open").css("left", menu_left);
		});

		$(".menu-bar-close").on("click", function() {
			$(".menu-bar-close").removeClass("active");
			$(".menu-bar").removeClass("active");
			$(".menu-block").removeClass("menu-open");
			$(".menu-block").css("left", "-100%");
		});

		/* -- Portfolio */
		$(".portfolio-switch").on("click", function(e) {
			$("#filters").toggleClass("active");
		});
		if( $("#portfolio").length ) {
			/*
			setTimeout(function() {
				var $container = $("#portfolio");
				$container.isotope({
				  itemSelector: '.portfolio-item',
				  gutter: 0,
				  transitionDuration: "0.5s"
				});

				$("#filters a").on("click",function(){
					$("#filters a").removeClass("active");
					$(this).addClass("active");
					var selector = $(this).attr("data-filter");
					$container.isotope({ filter: selector });
					return false;
				});
			}, 5000);
			*/

			var $container = $("#portfolio");
			$container.isotope({
			  itemSelector: '.portfolio-item',
			  gutter: 0,
			  transitionDuration: "0.5s"
			});

			$("#filters a").on("click",function(){
				$("#filters a").removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr("data-filter");
				$container.isotope({ filter: selector });
				return false;
			});

		}

		/* Portfolio Light Box */
		$('.portfolio-item-hover').magnificPopup({
			delegate: ' > a.zoom',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				/*titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}*/
			}
		});

		/* -- Team Section */
		if( $(".team-section").length ) {
			$(".team-box span").on("click", function(e) {
				$(this).parent(".team-box").toggleClass("active");
			});
		}

		/* -- Skill Section */
		if( $(".skill-section").length ) {
			$(".skill-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{
					var skill_item_count = 0;
					var skills_count = 0;

					skill_item_count = $( "[id*='skill_count-']" ).length;

					for(var i=1; i<=skill_item_count; i++)
					{
						skills_count = $( "[id*='skill_count-"+i+"']" ).attr( "data-skills_percent" );
						$("[id*='skill_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
					}
				});
			});
		}

		$( ".dial" ).each(function ()
		{
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{
				// alert(myVal);
				$this.knob({ });
				$({ value: 0 }).animate({ value: myVal },
				{
					duration: 2000,
					easing: 'swing',
					step: function ()
					{
						$this.val(Math.ceil(this.value)).trigger("change");
					}
				});
			});
		});

		/* - Flicker */
		if( $(".flicker").length ) {
			$('.bxslider').bxSlider({
				mode: 'vertical',
				pager: false
			});
		}

		/* - Counter App */
		if( $(".counter-app").length ) {
			$('.counter-app').each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					var statistics_item_count = 0;
					var statistics_count = 0;
					statistics_item_count = $( "[id*='statistics_count-']" ).length;
					for(var i=1; i<=statistics_item_count; i++) {
						statistics_count = $( "[id*='statistics_count-"+i+"']" ).attr( "data-statistics_percent" );
						$("[id*='statistics_count-"+i+"']").animateNumber({ number: statistics_count }, 2000);
					}
				});
			});
		}

		/* Product Light Box */
		$('.product-box .product-hover').magnificPopup({
			delegate: ' > a.zoom',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			}
		});

		/* - Product Details Slider */
		if( $(".single-product-slider").length ) {
			$('#product-carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 59,
				itemMargin: 0,
				asNavFor: '#product-slider',
			});

			$('#product-slider').flexslider({
				animation: "fade",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#product-carousel",
				directionNav: false
			});
		}

		/* - Price Filter */
		if( $("#slider-range").length ) {
			$( "#slider-range" ).slider({
				range: true,
				min: 0,
				max: 15000,
				values: [ 0, 10000 ],
				slide: function( event, ui ) {
					$( "#amount" ).html( "$" + ui.values[ 0 ] )
					$( "#amount2" ).html( "$" + ui.values[ 1 ] );
				}
			});
			$( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) );
			$( "#amount2" ).html( " $" + $(  "#slider-range" ).slider( "values", 1 ) );
		}

		/* Contact Map */
		if($('#map-canvas-contact').length==1){
			initialize('map-canvas-contact');
		}

		/* Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();

			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {

					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
				}
			});
			return false;
			$('#contact-form').attr("action", "saveQuery").submit();
		});

	});

	/* ## Window Resize - Handler for .resize() called */
	$(window).resize(function() {
		var window_width = $(window).width();
		var container_width = $(".main-container").width();
		var menu_left = ((window_width - container_width) / 2);
		$(".menu-block.menu-open").css("left", menu_left);
		if( $(".menu-block.menu-open").length ) {
			if( window_width > 1479) {
				$(".menu-block").css("left", menu_left);
			}
		}
		if( window_width < 992) {
			$(".menu-block").css("left", menu_left);
		}
		if( $(".top-strip.navbar-fixed-top").length ) {
			if( window_width > 1479) {
				$(".top-strip.navbar-fixed-top").css("right", menu_left);
			}
		}
		if( window_width > 991) {
			if( $(".menu-block .collapse.in").length || $(".menu-block .collapse").length ) {
				$(".menu-block").addClass("menu-open");
				$(".menu-bar").addClass("active");
				$(".menu-bar-close").addClass("active");
			}
		}
		if( window_width < 992 ) {
			$('.top-strip').removeClass("navbar-fixed-top animated fadeInDown");
		}
	});

	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {
		var window_width = $(window).width();
		var container_width = $(".main-container").width();
		var menu_left = ((window_width - container_width) / 2);
		if( $(".menu-block.menu-open").length ) {
			if( window_width > 1479) {
				$(".menu-block").css("left", menu_left);
			}
		}
		if( $(".top-strip.navbar-fixed-top").length ) {
			if( window_width > 1479) {
				$(".top-strip.navbar-fixed-top").css("right", menu_left);
			}
		}
		/* - Site Loader */
		if ( !$('html').is('.ie6, .ie7, .ie8') ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css('display','none');
		}

		var selector = $(this).attr('data-filter');
		$('#portfolio').isotope({ filter: selector });
	});

})(jQuery);

jQuery(document).ready(function(){

	// This button will increment the value
	$('.qtyplus').on('click', function(e){
		// Stop acting like a button
		e.preventDefault();

		// Get the field name
		fieldName = $(this).attr('data-field');

		// Get its current value
		var currentVal = parseInt($('input[name='+fieldName+']').val());

		// If is not undefined
		if (!isNaN(currentVal)) {
			// Increment
			$('input[name='+fieldName+']').val(currentVal + 1);
		} else {
			// Otherwise put a 0 there
			$(this).find('input[name='+fieldName+']').val(0);
		}
	});

	// This button will decrement the value till 0
	$(".qtyminus").on( 'click', function(e) {
		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		fieldName = $(this).attr('data-field');
		// Get its current value
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		// If it isn't undefined or its greater than 0
		if (!isNaN(currentVal) && currentVal > 0) {
			// Decrement one
			$('input[name='+fieldName+']').val(currentVal - 1);
		} else {
			// Otherwise put a 0 there
			$('input[name='+fieldName+']').val(0);
		}
	});
});
