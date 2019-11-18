$(document).ready(function(e) {
  $("a").click(function() {
    $("#showVideo").attr("src", $(this).attr("data-url"));
  });
});
