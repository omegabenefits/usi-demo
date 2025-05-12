(function($) {
	'use strict';
	// when the DOM is ready:
	// $(function() {
	// When the window is loaded:

	$(window).load(function() {
		// REPLACEMENT FOR OCEANWP STICKY HEADER PREMIUM PLUGIN
		// (haven't dealt with avoiding conflict if the plugin is active, just works in its absence!)

		window.addEventListener('scroll', onWindowScroll);
		function onWindowScroll(event) {
			if (window.pageYOffset > 3) {
				$('body').addClass('is-sticky');
				// header starts out larger then shrinks to 60, so our spacer scales with the transform of the header! keeps page content below spacer from jumping up
				var stickyHeight = $('#site-header').height();
				$('#stickyHeaderSpacer').css('height', stickyHeight + 'px');
				$('#site-header').addClass('shrink-header');
				$('#site-header').removeClass('minimal-header');
				$('#top-bar-wrap').hide(); // if preview mode topbar is enabled, must hide or else it leaves a gap in our sticky nav
			} else {
				$('body').removeClass('is-sticky');
				$('#stickyHeaderSpacer').css('height', '0px');
				$('#site-header').removeClass('shrink-header');
				$('#site-header').addClass('minimal-header');
				$('#top-bar-wrap').show();
			}
		}

		$('.searchform .field, #searchform .field').on('keypress', function(event) {
			var keyPressed = event.keyCode || event.which;
			if (keyPressed === 13) {
				event.preventDefault();
				return false;
			}
		});

		// when using the header_replace menu search, match the text alignment of the input to the float of the menu itself
		var menuFloat = $('#site-navigation-wrap').css('float');
		$('#site-navigation-wrap .header-searchform input').css('text-align', menuFloat);

		// 		// sticky offset compensation for anchors??
		// 		window.addEventListener('elementor/frontend/init', function() {
		// 		elementorFrontend.hooks.addFilter('frontend/handlers/menu_anchor/scroll_top_distance', function(scrollTop) {
		// 			return scrollTop - 80;
		// 		});
		// 		});

		// 		// Disable default click events on anchor links handled by Elementor
		// 		jQuery(document).off('click', 'a[href*="#"]');
		//
		// 		// Add a new click event handler for anchor links
		// 		jQuery('a[href*="#"]').on('click', function(e) {
		// 			e.preventDefault(); // this breaks link functionality coming from any other page!
		// 			var targetId = jQuery(this)
		// 				.attr('href')
		// 				.split('#')[1];
		// 			var targetElement = document.getElementById(targetId);
		// 			if (targetElement) {
		// 				var topOffset = 120; // Adjust this based on the height of your sticky header
		// 				var elementPosition = targetElement.getBoundingClientRect().top;
		// 				var offsetPosition = elementPosition + window.pageYOffset - topOffset;
		// 				window.scrollTo({
		// 					top: offsetPosition,
		// 					behavior: 'smooth',
		// 				});
		// 				console.log('anchor scroll sticky offset ' + topOffset);
		// 			} else {
		// 				console.log('no such anchor on this page!');
		// 			}
		// 		});

		// end DOM ready
	});
})(jQuery);
