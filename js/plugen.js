if ($(".carousel1").length > 0) {
  $(".carousel1").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    variableWidth: false,

    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if ($(".carousel2 .pairant").length > 0) {
  $(".carousel2 .pairant").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
}
