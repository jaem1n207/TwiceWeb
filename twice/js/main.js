jQuery(document).ready(function($) {
  var modalTrigger = $(".cd-modal-trigger"),
    transitionLayer = $(".cd-transition-layer"),
    transitionBackground = transitionLayer.children(),
    modalWindow = $(".cd-modal");

  var frameProportion = 1.78,
    frames = transitionLayer.data("frame"),
    resize = false;

  setLayerDimensions();
  $(window).on("resize", function() {
    if (!resize) {
      resize = true;
      !window.requestAnimationFrame
        ? setTimeout(setLayerDimensions, 300)
        : window.requestAnimationFrame(setLayerDimensions);
    }
  });

  // 열기
  modalTrigger.on("click", function(event) {
    event.preventDefault();
    var modalId = $(event.target).attr("href");
    transitionLayer.addClass("visible opening");
    var delay = $(".no-cssanimations").length > 0 ? 0 : 800;
    setTimeout(function() {
      modalWindow.filter(modalId).addClass("visible");
      transitionLayer.removeClass("opening");
    }, delay);
  });

  // 닫기
  modalWindow.on("click", ".modal-close", function(event) {
    event.preventDefault();
    transitionLayer.addClass("closing");
    modalWindow.removeClass("visible");
    transitionBackground.one(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function() {
        transitionLayer.removeClass("closing opening visible");
        transitionBackground.off(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend"
        );
      }
    );
  });

  function setLayerDimensions() {
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      layerHeight,
      layerWidth;

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth;
      layerHeight = layerWidth / frameProportion;
    } else {
      layerHeight = windowHeight * 1.2;
      layerWidth = layerHeight * frameProportion;
    }

    transitionBackground.css({
      width: layerWidth * frames + "px",
      height: layerHeight + "px"
    });

    resize = false;
  }
});
