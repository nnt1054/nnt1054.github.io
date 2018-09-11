$('.btn-link').on('click', function() {
  $('.landing-page').addClass('raise');
  var page = $('.' + this.getAttribute('page'))
  page.toggleClass('show')
  $('body,html').addClass('scroll-enable');
  $('.home-arrow').addClass('show')
});

$('.home-arrow').on('click', function() {
  $('.landing-page').removeClass('raise');
  $('.page').removeClass('show');
  $('body,html').removeClass('scroll-enable');
  $(this).removeClass('show')
})

$('.page').on('click', function() {
  $('.monkas-container').removeClass('hover')
})

$(".profile-pic").hover(
	function() {
		if (screen.width >= screen.height) {
			$(".overlay-animation").css("transition-delay", "4s");
			$(".overlay-animation").css("opacity", "1");
		}
	}, function() {
		$(".overlay-animation").css("transition-delay", "0s");
		$(".overlay-animation").css("opacity", "0");
});

var audio = $("#nani-clip")[0];
$(".profile-pic").hover(
	function() {
		if (screen.width >= screen.height) {
			if (!audio.ended) {
				audio.play();
			}
		}
	}, function() {
		audio.pause();
		if (!audio.ended) {
	 		audio.currentTime = 0;
	 	} else {
			$(".profile-pic").css("pointer-events", "none");
	 	}
	}
);

function enableAnimation() {
	$(".profile-pic").css("pointer-events", "auto");
}

function audioClipLoaded() {
	timeoutID = window.setTimeout(enableAnimation, 5000);
}

$(".resume-btn").hover(
	function() {
		$(".monkas-container").addClass('show');
	}, function() {
		$(".monkas-container").removeClass('show');
	}
);