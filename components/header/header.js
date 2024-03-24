document.addEventListener('DOMContentLoaded', () => {
  const headerWrapper = document.querySelector('.headerWrapper')
  const header = document.querySelector('.header')

  function checkWindowScroll() {
    window.scrollY > 0
      ? headerWrapper.classList.add('headerWrapper--Scrolled')
      : headerWrapper.classList.remove('headerWrapper--Scrolled')
  }

  checkWindowScroll()
  window.addEventListener('scroll', checkWindowScroll)

  /* Burger */
  const burgerIcon = document.querySelector('.header__contactsSection-burgerIcon')
  const burgerMenu = document.querySelector('.header__burgerMenu')

  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('header__contactsSection-burgerIcon--Active')
    burgerMenu.classList.toggle('header__burgerMenu--Hidden')

    if (burgerMenu.classList.contains('header__burgerMenu--Hidden')) {
      header.setAttribute('style', 'gap: 0')
    } else {
      header.setAttribute('style', 'gap: 32px')
    }

  })


})
