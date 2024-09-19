$(function () {
  $(".partner ul li").mouseenter(function () {
    $(this).css({ filter: "none" });
  })
  $(".partner ul li").mouseleave(function () {
    $(this).css({ filter: "grayscale(1)" });
  });
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop()
  if (scrollTop > 750) {
    $("#header").css({ position: "fixed", width: "100%", background: "#020318" })
    $(".visual_banner").css({ marginTop: 100 });
  } else {
    $("#header").css({ position: "absolute", background: "transparent" });
    $(".visual_banner").css({ marginTop: 0 });
  }
});
let delay = 300;
let timer = null;

function showMore() {

  $(".close_btn").hide();
  $(".more_btn").show();
}
function showClose() {
  $(".more_btn").hide();
  $(".close_btn").show();
}

$(window).on("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    if ($(window).innerWidth() > 1024) {
      $(".partner ul li").css({ filter: "grayscale(1)" });
      $(".more_btn").hide();
      $(".close_btn").hide();
      $(".partner ul li").show();
    } else if ($(window).innerWidth() > 600 || $(window).innerWidth() < 1024) {
      $(".partner ul li").css({ filter: "grayscale(0)" });
      $(".partner ul li:nth-child(n+10)").hide();
      showMore();
      $(".more_btn").click(function () {
        $(".partner ul li:nth-child(n+10)").show();
        showClose();
      });
      $(".close_btn").click(function () {
        $(".partner ul li:nth-child(n+10)").hide();
        showMore();
      })
    } else if ($(window).innerWidth() <= 600) {
      $(".partner ul li").css({ filter: "grayscale(0)" });
      $(".partner ul li:nth-child(n+9)").hide();
      $(".more_btn").show();
      $(".more_btn").click(function () {
        $(".partner ul li:nth-child(n+9)").fadeIn();
        showClose();
      });
      $(".close_btn").click(function () {
        $(".partner ul li:nth-child(n+9)").fadeOut();
        showMore();
      })
    } {

    }
  }, delay);

})