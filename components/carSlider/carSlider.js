document.addEventListener('DOMContentLoaded', () => {
  const prevArrow = document.querySelector('.carSliderWrapper__main-arrow--prev')
  const nextArrow = document.querySelector('.carSliderWrapper__main-arrow--next')

  $('.carSliderWrapper__main').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
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
