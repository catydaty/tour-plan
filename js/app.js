$(document).ready(function () {
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
    autoHeight: true,
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

  // задаем свойства для мобильного меню
  let menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggle('navbar-bottom__visible');
  });

  // добавляем модальное окно
  let modalButton = $('[data-toggle="modal"]');
  let closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay__visible');
    modalDialog.addClass('modal__dialog__visible');
  };
  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay__visible');
    modalDialog.removeClass('modal__dialog__visible');
  };

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) document.getElementById('modal_id').hidden = 1;
  });
});