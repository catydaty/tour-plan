/* добавляем слайдеры */
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },
  effect: 'coverflow',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },
  effect: 'slide',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
/* добавляет метку на карту */
var myMap;

ymaps.ready(init);

function init() {
  myMap = new ymaps.Map('map', {
    center: [7.838196, 98.298813], // Hilton
    zoom: 15
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [7.838196, 98.298813]
    },
  });

  myMap.geoObjects.add(myGeoObject);
};

/* добавляем эффект паралакса */
$('.parallax-window').parallax({ imageSrc: 'img/newsletter-bg.jpeg' });