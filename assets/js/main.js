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