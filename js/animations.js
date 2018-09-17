function enableAnimation() {
	if (presses['page-1'] && presses['page-2'] && presses['page-3']) {
		$(".profile-pic").css("pointer-events", "auto");
	}
}

var clipLoaded = false;
function audioClipLoaded() {
  clipLoaded = true;
}

var presses = {
	'page-1': false,
	'page-2': false,
	'page-3': false,
}

$('.btn-link').on('click', function() {
  $('.landing-page').addClass('raise');
  var page = $('.' + this.getAttribute('page'))
  page.toggleClass('show');
  page.css("overflow", "scroll");

  $(".btn-play").css("display", "none")
  $('body,html').addClass('scroll-enable');
  $('.home-arrow').addClass('show');

  presses[this.getAttribute('page')] = true;
  enableAnimation()
});

$('.home-arrow').on('click', function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $('.page').animate({ scrollTop: 0 }, 1500);
  $(".btn-play").css("display", "block")

  $('.landing-page').removeClass('raise');
  $('.page').removeClass('show');
  $('body,html').removeClass('scroll-enable');
  $(this).removeClass('show')
})


$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.page').animate({ scrollTop: 0 }, "slow");
    $('.landing-page').removeClass('raise');
    $('.page').removeClass('show');
    $('body,html').removeClass('scroll-enable');
  	$(".btn-play").css("display", "block")
    $('.home-arrow').removeClass('show')
  }
});

$('.page').on('click', function() {
  $('.monkas-container').removeClass('hover')
})

// $(".profile-pic").hover(
// 	function() {
// 		if (screen.width >= screen.height) {
// 			$(".overlay-animation").css("transition-delay", "4s");
// 			$(".overlay-animation").css("opacity", "1");
// 		}
// 	}, function() {
// 		$(".overlay-animation").css("transition-delay", "0s");
// 		$(".overlay-animation").css("opacity", "0");
// });

var audio = $("#nani-clip")[0];
$(".btn-play").on('click', function() {
	if (screen.width >= screen.height) {
		$(this).css("display", "none");

		$(".overlay-animation").css("transition-delay", "4s");
		$(".overlay-animation").css("opacity", "1");

 		audio.currentTime = 0;
		audio.play();

		$('.profile-pic').addClass('play');
		$('.hover-animation').addClass('play');
		$('.rotate-animation').addClass('play');
		$('.click-overlay').addClass('play')

        setTimeout(function () {
			$(".btn-play").css("display", "block");
			$(".overlay-animation").css("transition-delay", "0s");
			$(".overlay-animation").css("opacity", "0");
			$('.profile-pic').removeClass('play');
			$('.hover-animation').removeClass('play');
			$('.rotate-animation').removeClass('play');
			$('.click-overlay').removeClass('play')
        }, 6500);
	}
})

// var audio = $("#nani-clip")[0];
// $(".profile-pic").hover(
// 	function() {
// 		if (screen.width >= screen.height) {
// 			if (!audio.ended) {
// 				audio.play();
// 			}
// 		}
// 	}, function() {
// 		audio.pause();
// 		if (!audio.ended) {
// 	 		audio.currentTime = 0;
// 	 	} else {
// 			$(".profile-pic").css("pointer-events", "none");
// 	 	}
// 	}
// );

$(".resume-btn").hover(
	function() {
		$(".monkas-container").addClass('show');
	}, function() {
		$(".monkas-container").removeClass('show');
	}
);