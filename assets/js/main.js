!(function ($) {
	"use strict";

	// Nav Menu
	$(document).on('click', '.nav-menu a, .mobile-nav a', function (e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var hash = this.hash;
			var target = $(hash);
			if (target.length) {
				e.preventDefault();

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if (hash == '#header') {
					$('#header').removeClass('header-top');
					$("section").removeClass('section-show');
					return;
				}

				if (!$('#header').hasClass('header-top')) {
					$('#header').addClass('header-top');
					setTimeout(function () {
						$("section").removeClass('section-show');
						$(hash).addClass('section-show');
					}, 350);
				} else {
					$("section").removeClass('section-show');
					$(hash).addClass('section-show');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}

				return false;

			}
		}
	});

	// Activate/show sections on load with hash links
	if (window.location.hash) {
		var initial_nav = window.location.hash;
		if ($(initial_nav).length) {
			$('#header').addClass('header-top');
			$('.nav-menu .active, .mobile-nav .active').removeClass('active');
			$('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
			setTimeout(function () {
				$("section").removeClass('section-show');
				$(initial_nav).addClass('section-show');
			}, 350);
		}
	}

	// Mobile Navigation
	if ($('.nav-menu').length) {
		var $mobile_nav = $('.nav-menu').clone().prop({
			class: 'mobile-nav d-lg-none'
		});
		$('body').append($mobile_nav);
		$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
		$('body').append('<div class="mobile-nav-overly"></div>');

		$(document).on('click', '.mobile-nav-toggle', function (e) {
			$('body').toggleClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			$('.mobile-nav-overly').toggle();
		});

		$(document).click(function (e) {
			var container = $(".mobile-nav, .mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
			}
		});
	} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
		$(".mobile-nav, .mobile-nav-toggle").hide();
	}

	// jQuery counterUp
	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 1000
	});

	// Skills section
	$('.skills-content').waypoint(function () {
		$('.progress .progress-bar').each(function () {
			$(this).css("width", $(this).attr("aria-valuenow") + '%');
		});
	}, {
		offset: '80%'
	});

	setTimeout(function () {
		$('.tload').fadeToggle()
	}, 3000);

	// Initiate venobox 
	$(document).ready(function () {
		$('.venobox').venobox();
	});

	//right click
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	}, false)




	document.onkeydown = function (e) {
		if (e.ctrlKey &&
			(e.keyCode === 67 ||
				e.keyCode === 86 ||
				e.keyCode === 85 ||
				e.keyCode === 117 ||
				e.keyCode == 73)) {

			return false;

		} else if (e.keyCode === 16 || e.keyCode === 123)

		{
			return false;
		} else {
			return true;
		}
	};



})(jQuery);
