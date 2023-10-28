const slider = document.querySelector('.swiper')

const swiper = new Swiper(slider, {
  direction: 'horizontal',
  loop: true, // показ слайдов циклом
  spaceBetween: 20, // расстоян. м/у слайдами
  slidesPerView: 1, // видим на экране 1 карточку

  // настройки пагинации (см. API SwiperJS)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

     // ПОКАЖЕТ НУМЕРАЦИЮ СЛАЙДОВ
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
 },

    // ДЛЯ СЛАБОВИДЯЩИХ
    a11y:{
      paginationBulletMessage: 'Название слайда{{index}}'
    }

});
