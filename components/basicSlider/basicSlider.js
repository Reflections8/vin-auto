document.addEventListener('DOMContentLoaded', () => {
  const sliderPrevButton = document.querySelector('.basicSlider__arrow--prev')
  const sliderNextButton = document.querySelector('.basicSlider__arrow--next')

  $('[data-slider-name="recent-lots"]').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: false,
    prevArrow: sliderPrevButton,
    nextArrow: sliderNextButton,
    responsive: [
      {
        breakpoint: 1481,
        settings: {
          swipe: true,
        }
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3.25,
           swipe: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.25,
           swipe: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.25,
           swipe: true,
        }
      },
    ]
  });

})
