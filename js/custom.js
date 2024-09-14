$(".tempo-slider").slick({
  dots: !1,
  arrows: !0,
  autoplay: !0,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 980, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 580, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
$(".pkg-slider").slick({
  dots: !1,
  autoplay: !0,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 980, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 580, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
