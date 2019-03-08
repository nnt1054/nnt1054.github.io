$('.nav-container').on('click', function() {
	$('.nav-container').toggleClass('show');
})

$('body').on('click touchend', function(event) {
	if (!$(event.target).hasClass('nav-container')) {
		$('.nav-container').removeClass('show');
	}
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    back_btn = $('#back-id');
    if (back_btn[0]) {
      back_btn[0].click();
    }
  }
});


var transmissionAudio = new Audio('/assets/images/instant_transmission.mp3');
$('#index-img').on('click', function() {
  transmissionAudio.play();
  $('.hover-animation').css("animation", "side-step 0.3s normal  0.15s forwards");
  setTimeout(function() {
    $('.hover-animation').css("animation", "");
  }, 1500)
})