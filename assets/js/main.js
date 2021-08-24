$(document).ready(function() {
	// Owl Customer carousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    autoPlay: 3000,
        dots: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:3,
	        },
	        1000:{
	            items:3,	            
	            loop:false,
	        }
	    }
	})

	// Video player 
	const video = document.getElementById("video");
	const circlePlayButton = document.getElementById("circle-play-b");

	function togglePlay() {
		if (video.paused || video.ended) {
			video.play();
		} else {
			video.pause();
		}
	}

	circlePlayButton.addEventListener("click", togglePlay);
	video.addEventListener("playing", function () {
		circlePlayButton.style.opacity = 0;
	});
	video.addEventListener("pause", function () {
		circlePlayButton.style.opacity = 1;
	});
});