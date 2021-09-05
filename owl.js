$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    dots: true,
    //autoplay: true,
    autowidth: true,
    //autoplayTimeout: 2000,
    //autoplaySpeed: 2000,
    items: 3,
  });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
