$(window).ready(function() {
  setInterval(function() {
    var winheight = $(window).height();
    var bodheight = $('main').height() + $('#main').height() +$('footer').height()  + 55;
    if (bodheight < winheight) {
      $('footer').css("position", "absolute");
      $('footer').css("bottom", "0");
      $('footer').css("left", "0");
    } else {
      $('footer').css("position", "static");
    }
  }, 200);
});