$(function() {
  var nav = $("nav");
  var toggler = $("nav button.navbar-toggler");
  var searchBtn = $("nav button#search-button");
  var header = $("#header");

  var navHeight = nav.outerHeight();

  var update = function(inverseExpanded) {
    return function() {
      var scroll = $(window).scrollTop();
      var offset = header.outerHeight() - navHeight;
      var expanded = (toggler.attr("aria-expanded") === "true") ^ inverseExpanded;
      if (scroll >= offset || expanded) {
        nav
          .removeClass('navbar-light')
          .removeClass('bg-transparent')
          .addClass('navbar-dark')
          .addClass('bg-primary');
        searchBtn
          .removeClass('btn-outline-dark')
          .addClass('btn-outline-light');
      } else {
        nav
          .removeClass('navbar-dark')
          .removeClass('bg-primary')
          .addClass('navbar-light')
          .addClass('bg-transparent');
        searchBtn
          .removeClass('btn-outline-light')
          .addClass('btn-outline-dark');
      }
    }
  }

  $(window).scroll(update(false));
  $(window).resize(update(false));
  toggler.click(update(true));
});