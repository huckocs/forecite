var elementPosition = $('.suggestions').offset();

$(window).scroll(function(){
  if($(window).scrollTop() > elementPosition.top){
    $('.suggestions').addClass('is-sticky');
  } else {
    $('.suggestions').removeClass('is-sticky');
  }
});