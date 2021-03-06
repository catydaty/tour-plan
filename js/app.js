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
// добавляем возможность отключения модального окна по нажатия кнопки esc 
  document.addEventListener('keydown', function (closeModal) {
    if (closeModal.keyCode === 27) {
    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay__visible');
    modalDialog.removeClass('modal__dialog__visible');
  }});

// обработка форм
  $('.form').each(function() {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: 'Please specify your name',
        mail: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com'
        },
        phone: {
          required: 'Need your phone number',
        },
      }
    });
  });

// добавляем маску в форму на телефон
  $(document).ready(function () {
    $('.num').mask('+7 (999) 999-9999');
  });

// добавляем анимацию на сайт
  AOS.init();
});