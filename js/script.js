// Import Swiper JS To Create Slider
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 1800,
    disableOnInteraction: false,
    },
  pagination: {
   el: '.swiper-pagination',
   clickable: true,
   },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
 });