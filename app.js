function setNavOffset () {
  var offset = $("#header").height() - $("nav").outerHeight()
  $("nav").attr("data-sps-offset", offset);
}

$(document).ready(function() {
  setNavOffset()
})
