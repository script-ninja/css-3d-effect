document.addEventListener('DOMContentLoaded', function() {
	const slider = new Swiper('.carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.navigation-next',
			prevEl: '.navigation-prev',
		}
	});

	document.querySelector('video').playbackRate = 2;
});