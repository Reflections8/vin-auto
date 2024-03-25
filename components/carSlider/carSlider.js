document.addEventListener('DOMContentLoaded', () => {
  $('.carSliderWrapper__main').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    arrows: false,
    asNavFor: '.carSliderWrapper__gallery',
  });

  $('.carSliderWrapper__gallery').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.carSliderWrapper__main',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
         slidesToShow: 4.25,
        }
      },
    ]
  });

})
