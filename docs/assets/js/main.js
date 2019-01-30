$('.nav-container').on('click', function() {
	$('.nav-container').toggleClass('show');
})

$('body').on('click', function(event) {
	if (!$(event.target).hasClass('nav-container')) {
		$('.nav-container').removeClass('show');
	}
});