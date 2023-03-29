import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// Vertical slider for home page ========================================================================================================================================================

/* if (document.querySelectorAll('.main-slider__wrap').length > 0) {
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
} */


    const breakpoint = window.matchMedia('(max-width: 768px)');

    // keep track of swiper instances to destroy later

    let mainSwiper;
    const breakpointChecker = function () {

      // if larger viewport and multi-row layout needed
      if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available

        mainSwiper.destroy(true, true);

        // or/and do nothing
        // else if a small viewport and single column layout needed
      } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();

      }

      };

      let enableSwiper = function () {

        let anchors = ['Overview', 'Solutions', 'CF Leadership', 'CF Board', 'AMS', 'Ingeus', 'CF Sustainability', 'CF Diversity', 'CF Equity', 'CF Projects', 'EMR' ];

        mainSwiper = new Swiper(".main-slider", {
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


    breakpoint.addListener(breakpointChecker);

    // kickstart

document.addEventListener('DOMContentLoaded', () => {
  breakpointChecker();
})
document.addEventListener('resize', () => {
  breakpointChecker();
})


