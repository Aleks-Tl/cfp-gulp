import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// Vertical slider for home page ========================================================================================================================================================

if (document.querySelectorAll('.main-slider__wrap').length > 0) {
  let anchors = ['Overview', 'Solutions', 'CF Leadership', 'CF Board', 'AMS', 'Ingeus', 'CF Sustainability', 'CF Diversity', 'CF Equity', 'CF Projects', 'EMR' ];

  const swiper = new Swiper(".main-slider", {
    direction: "vertical",
    speed: 900,
    effect: "fade",
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (anchors[index]) + "</span>";
      },
    },
  });
}

