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
        delay: 5000,
      },
      speed: 2500,
      slidesPerView: 1,
      keyboard: {
        onlyInViewport: false
      },
      freeModeSticky: true,
      parallax:true
    });