$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

});
