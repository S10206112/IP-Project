var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: true,
    mousewheel: {
      invert: false,
    },
    autoplay: {
      delay: 4000,
    },
    speed: 100,
    slidesPerView: 1,
    keyboard: {
      onlyInViewport: false
    },
    freeModeSticky: true,
    parallax:true
  });