var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },
  effect: 'coverflow',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

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