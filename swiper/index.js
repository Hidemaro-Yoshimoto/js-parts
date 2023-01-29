// どれか一つずつであればちゃんと動作する

// const scrollSwiper = new Swiper(".swiper", {
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// const fadeSwiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// const cubeSwiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

var coverflowSwiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});