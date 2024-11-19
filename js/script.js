$(document).ready(function () {
  const $owl = $("#comment-carousel");
  $owl.owlCarousel({
  mouseDrag: true,
  responsiveClass: true,
  center: true,
  items: 5,
  loop: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});

$("#next-btn").click(() => $owl.trigger("next.owl.carousel"));

$("#prev-btn").click(() => $owl.trigger("prev.owl.carousel"));



const $owl2 = $("#main-section-carousel");
$owl2.owlCarousel({
mouseDrag: true,
responsiveClass: true,
center: true,
items: 5,
loop: true,
margin: 20,
responsive: {
  0: {
    items: 2,
  },
  600: {
    items: 2,
  },
  1000: {
    items: 5,
  },
},
});

});


