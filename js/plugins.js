
//slow scroling



$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);
    return false;
});

$(function() {

  $(window).scroll(function() {

    var mass = Math.max(20, 70-0.1*$(this).scrollTop()) + 'px';

    $('#header').css({'font-size': mass, 'line-height': mass});
  });
});
