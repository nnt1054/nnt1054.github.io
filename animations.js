$('.btn-link').on('click', function() {
  $('.landing-page').toggleClass('raise');
  var page = $('.' + this.getAttribute('page'))
  page.toggleClass('show')
  $('body,html').toggleClass('scroll-enable');
});

$('.page').on('click', function() {
  $('.landing-page').toggleClass('raise');
  $(this).toggleClass('show');
  $('body,html').toggleClass('scroll-enable');
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
		audio.play();
	}, function() {
		audio.pause();
 		audio.currentTime = 0;
});