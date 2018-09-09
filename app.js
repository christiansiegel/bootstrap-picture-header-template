function initScrollPosStyling() {
  var nav = $("nav");
  var toggler = $("nav button.navbar-toggler");
  var header = $("#header");

  var navHeight = nav.outerHeight();

  var update = function(inverseExpanded) {
    return function() {
      var scroll = $(window).scrollTop();
      var offset = header.outerHeight() - navHeight;
      var expanded = (toggler.attr("aria-expanded") === "true") ^ inverseExpanded;
      if (scroll >= offset || expanded) {
        nav
          .removeClass('bg-transparent')
          .addClass('bg-primary');
      } else {
        nav
          .removeClass('bg-primary')
          .addClass('bg-transparent');
      }
    }
  }

  $(window).scroll(update(false));
  $(window).resize(update(false));
  $(window).bind('load', update(false));
  toggler.click(update(true));
}

function initMainLink() {
  var content = document.getElementById('main');
  var navHeight = $("nav").outerHeight()
  $("#main-link").click(function(event) {
    event.preventDefault()
    var count = content.offsetTop - window.scrollY - navHeight;
    window.scrollBy({top: count, left: 0, behavior: 'smooth'})
  });
}

$(function() {
  initScrollPosStyling();
  initMainLink();
});
