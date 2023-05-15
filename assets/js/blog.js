$(document).ready(function () {
  $(".pagination__button").click(function () {
    $(".overlay").addClass("active");
    $(".loading").removeClass("disabled");
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      $(".overlay").removeClass("active");
      $(".loading").addClass("disabled");
      $("body").css("overflow", "");
    }, 1200);
    $(this)
      .addClass("pagination__button--active")
      .siblings()
      .removeClass("pagination__button--active");
  });
});
