$(document).ready(function(){
    $('a').click(function(){
        $(this).toggleClass('active');
    });
    $('.menu').click(function(){
        $('.primary-navigation').toggleClass('active');
    });
});
limit = 800;  /* scrolltop value when opacity should be 0 */

$(window).on('scroll', function() {
var st = $(this).scrollTop();

/* avoid unnecessary call to jQuery function */
if (st <= limit) {
$('.main-img').css({ 'opacity' : (1 - st/limit)});
}
});

window.addEventListener('scroll', e => {
    var el = document.getElementById('jsScroll');
    if(window.scrollY > 200) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }