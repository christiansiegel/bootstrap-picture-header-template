$( document ).ready(function() {
  var offset = $("#header").height() - $("nav").outerHeight()
  $("nav").attr("data-sps-offset", offset);
})