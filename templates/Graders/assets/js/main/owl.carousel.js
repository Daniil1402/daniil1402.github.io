$(document).ready(() => {
  $("#news__slider").owlCarousel({
    loop: true,
    autoplay: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        margin: 5,
      },
      1024: {
        items: 2,
        margin: 10,
        dots: true,
        nav: false,
      },
      1450: {
        items: 3,
        margin: 20,
        nav: false,
        dots: true,
      },
    },
  });
});

$(document).ready(() => {
  $("#merch__slider").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true,
        margin: 0,
      },
      // 1024: {
      //   items: 2,
      //   margin: 10,
      //   dots: true,
      //   nav: false,
      // },
      // 1024: {
      //   items: 3,
      //   margin: 100,
      //   nav: false,
      //   dots: true,
      // },
    },
  });
});
