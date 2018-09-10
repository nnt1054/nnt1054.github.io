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