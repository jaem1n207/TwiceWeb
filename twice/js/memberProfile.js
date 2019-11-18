// 멤버별 프로필 사진 표시
$(function() {
  var contentBackground = $(".modal-content");
  $("#nayeon").click(function() {
    contentBackground.addClass("NayeonImg");
    // document.getElementsByClassName("NayeonImg").style.animation =
    //   "fadeInFromNone 1.3s infinite ease-in-out";
    // $(".NayeonImg").animate({ opacity: "1" }, 1000);
    contentBackground.removeClass(
      "jeongyeonImg momoImg sanaImg jihyoImg minaImg dahyeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#jeongyeon").click(function() {
    contentBackground.addClass("jeongyeonImg");
    contentBackground.removeClass(
      "NayeonImg momoImg sanaImg jihyoImg minaImg dahyeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#momo").click(function() {
    contentBackground.addClass("momoImg");
    contentBackground.removeClass(
      "jeongyeonImg NayeonImg sanaImg jihyoImg minaImg dahyeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#sana").click(function() {
    contentBackground.addClass("sanaImg");
    contentBackground.removeClass(
      "jeongyeonImg momoImg NayeonImg jihyoImg minaImg dahyeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#jihyo").click(function() {
    contentBackground.addClass("jihyoImg");
    contentBackground.removeClass(
      "jeongyeonImg momoImg sanaImg NayeonImg minaImg dahyeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#mina").click(function() {
    contentBackground.addClass("minaImg");
    contentBackground.removeClass(
      "jeongyeonImg momoImg sanaImg jihyoImg NayeonImg dahyeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#dahyeon").click(function() {
    contentBackground.addClass("dahyeonImg");
    contentBackground.removeClass(
      "jeongyeonImg momoImg sanaImg jihyoImg minaImg NayeonImg chaeyongImg TzuyuImg"
    );
  });
  $("#chaeyong").click(function() {
    contentBackground.addClass("chaeyongImg");
    contentBackground.removeClass(
      "jeongyeonImg momoImg sanaImg jihyoImg minaImg dahyeonImg NayeonImg TzuyuImg"
    );
  });
  $("#Tzuyu").click(function() {
    contentBackground.addClass("TzuyuImg");
    contentBackground.removeClass(
      "jeongyeonImg momoImg sanaImg jihyoImg minaImg dahyeonImg chaeyongImg NayeonImg"
    );
  });
});
