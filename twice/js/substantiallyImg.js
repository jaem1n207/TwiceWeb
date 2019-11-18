$(document).ready(function(e) {
  $(document).on("click", "img", function() {
    var path = $(this).attr("src");
    showImage(path);
  }); 

  function showImage(fileCallPath) {
    $(".bigPictureWrapper")
      .css("display", "flex")
      .show();

    $(".bigPicture")
      .html("<img src='" + fileCallPath + "' >")
      .animate({ width: "100%", height: "100%" }, 700);
  } 

  $(".bigPictureWrapper").on("click", function(e) {
    $(".bigPicture").animate({ width: "0%", height: "0%" }, 700);
    setTimeout(function() {
      $(".bigPictureWrapper").hide();
    }, 700);
  }); 
});
