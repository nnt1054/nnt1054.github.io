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

$('.project-img-left').hover(
  function() {
    $(this).attr('src', this.getAttribute('gif'))
  }, function() {
    $(this).attr('src', this.getAttribute('static'))
  }
);

$('.project-img-right').hover(
  function() {
    $(this).attr('src', this.getAttribute('gif'))
  }, function() {
    $(this).attr('src', this.getAttribute('static'))
  }
);



$("#scrum-btn").click(function() {
    var offset = 20; //Offset of 20px
    $('html, body').animate({
        scrollTop: $("#scrum").offset().top + offset
    }, 500);
});

$("#project-btn").click(function() {
    var offset = 20; //Offset of 20px
    $('html, body').animate({
        scrollTop: $("#project").offset().top + offset
    }, 500);
});

// $("#contact-btn").click(function() {
//     var offset = 20; //Offset of 20px
//     $('html, body').animate({
//         scrollTop: $("#contact").offset().top + offset
//     }, 500);
// });

// $("#contact-btn").click(function() {
//     var offset = 20; //Offset of 20px
//     $('html, body').animate({
//         scrollTop: $("#contact").offset().top + offset
//     }, 500);
// });