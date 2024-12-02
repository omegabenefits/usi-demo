(function( $ ) {
	'use strict';
	// when the DOM is ready:
	// $(function() {
	// When the window is loaded:
	
	$( window ).load( function() {
 
	// REPLACEMENT FOR OCEANWP STICKY HEADER PREMIUM PLUGIN
	// (haven't dealt with avoiding conflict if the plugin is active, just works in its absence!)
	
	// 	window.addEventListener("scroll", onWindowScroll);
	// 	function onWindowScroll (event) {
	// 		if (window.pageYOffset > 10) {
	// 			$( "body").addClass( 'is-sticky');
	// 			$( ".stickybuffer" ).show();
	// 			$( "#site-header").addClass( "shrink-header" );
	// 		} else {
	// 			$( "body").removeClass( 'is-sticky');
	// 			$( ".stickybuffer").hide();
	// 			$( "#site-header").removeClass( "shrink-header" );
	// 		}
	// 	};

	

	$( ".searchform .field, #searchform .field" ).on( "keypress", function (event) { 
		var keyPressed = event.keyCode || event.which; 
		if ( keyPressed === 13 ) {
			event.preventDefault(); 
			return false; 
		}
	}); 
	
	// when using the header_replace menu search, match the text alignment of the input to the float of the menu itself
	var menuFloat = $('#site-navigation-wrap').css('float');
	$('#site-navigation-wrap .header-searchform input').css('text-align', menuFloat);
	
	
	// end DOM ready
	}); 

})( jQuery );
