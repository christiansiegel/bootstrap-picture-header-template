$(function() {
  var nav = $("nav");
  var toggler = $("nav > button.navbar-toggler");
  var header = $("#header");

  var navHeight = nav.outerHeight();

  var update = function(inverseExpanded) {
    return function() {
      var scroll = $(window).scrollTop();
      var offset = header.outerHeight() - navHeight
      var expanded = (toggler.attr("aria-expanded") === "true") ^ inverseExpanded
      if (scroll >= offset || expanded) {
        nav
          .removeClass('navbar-light')
          .removeClass('bg-transparent')
          .addClass('navbar-dark')
          .addClass('bg-primary');
      } else {
        nav
          .removeClass('navbar-dark')
          .removeClass('bg-primary')
          .addClass('navbar-light')
          .addClass('bg-transparent');
      }
    }
  }

  $(window).scroll(update(false));
  $(window).resize(update(false));
  toggler.click(update(true));
});