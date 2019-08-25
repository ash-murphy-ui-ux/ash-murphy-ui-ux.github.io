$(document).ready(function () {
  var offset = $(".intro").offset();
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    $(".intro").css("right", st + offset.left);
  });
});
