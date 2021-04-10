const swiper = new Swiper('.channel-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1700: {
      slidesPerView: 5
    },
    1400: {
      slidesPerView: 4
    },
    1150: {
      slidesPerView: 3
    },
    850: {
      slidesPerView: 2
    },
  },
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const swiperRecommend = new Swiper('.channel-slider-recommend', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1400: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 2
    },
  },
  navigation: {
    nextEl: '.channel-button-next-recommend',
    prevEl: '.channel-button-prev-recommend',
  },
});
const swiperFoodDrink = new Swiper('.channel-slider-food_drink', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1700: {
      slidesPerView: 5
    },
    1400: {
      slidesPerView: 4
    },
    1150: {
      slidesPerView: 3
    },
    850: {
      slidesPerView: 2
    },
  },
  navigation: {
    nextEl: '.channel-button-next-food_drink',
    prevEl: '.channel-button-prev-food_drink',
  },
});
const searchBtn = document.querySelector ('.mobile-search');
const mobileSearch = document.querySelector ('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 720) {
  swiper.destroy();
  swiperRecommend.destroy();
  swiperFoodDrink.destroy();
}