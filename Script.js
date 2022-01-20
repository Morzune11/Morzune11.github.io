// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  //ambil isi href
  let tujuan = $(this).attr("href");

  // ambil elemen yang bersangkutan

  let elemenTujuan = $(tujuan);

  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 60,
    },
    1000,
    "easeInOutExpo"
  );
  e.preventDefault();
});

//parralax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  //jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px , " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px , " + wScroll / 1.6 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px , " + wScroll / 1.2 + "%)",
  });

  //navbar
  if (wScroll > $(".about").offset().top) {
    $(".navbar").addClass("bg-dark");
  } else {
    $(".navbar").removeClass("bg-dark");
  }
  //About

  if (wScroll > $(".about").offset().top - 250) {
    $(".pKiri").addClass("munculTeks");
    $(".pKanan").addClass("munculTeks");
  }

  //portofolio

  if (wScroll > $(".portofolio").offset().top - 250) {
    $(".portofolio .img-thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portofolio .img-thumbnail").eq(i).addClass("muncul");
      }, 300 * i);
    });
  }
});
