$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='ti-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='ti-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: false
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider__review").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    arrows: false,
  });
});