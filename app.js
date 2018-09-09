function initNavScrollStyling() {
  var nav = $("nav");
  var toggler = $("nav button.navbar-toggler");

  var update = function(inverseExpanded) {
    return function() {
      var scroll = $(window).scrollTop();
      var expanded = (toggler.attr("aria-expanded") === "true") ^ inverseExpanded;
      if (scroll > 0 || expanded) {
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
  var nav = $("nav");
  $("#main-link").click(function(event) {
    event.preventDefault();
    var count = content.offsetTop - window.scrollY - nav.outerHeight();
    window.scrollBy({top: count, left: 0, behavior: 'smooth'});
  });
}

$(function() {
  initNavScrollStyling();
  initMainLink();
});
