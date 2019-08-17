// code borrowed from https://stanhub.com/sticky-header-change-navigation-active-class-on-page-scroll-with-jquery/

//Indicates which navigation tab is active

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  let scrollPosition = $(document).scrollTop();
  $('nav a').each(function () {
    let currentLink = $(this);
    let refElement = $(currentLink.attr("href"));
     if (refElement.position()){
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('nav ul li a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
     }
  });
}
