$(function() {

	let header = $("#header");
	let introH = header.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#burger");

	// Fixed  Header
	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function(){
		introH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH){
		if (scrollPos > introH) {
			$(".header__top").addClass("fixed");
		} else {
			$(".header__top").removeClass("fixed");
		}
	}

	// Smooth scroll
	$("[data-scroll").on("click", function(event){
		event.preventDefault();

		nav.removeClass("show");

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		console.log(elementId);
		console.log(elementOffset);
		$("html, body").animate({
			scrollTop: elementOffset - 120
		}, 700);
	})
	
	// Burger Menu
	navToggle.on("click", function(event){
		event.preventDefault();

		nav.toggleClass("show");
	})
})