document.addEventListener('DOMContentLoaded', () => {

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".dropdown__select");
    const caret = dropdown.querySelector(".dropdown__select-arrow");
    const menu = dropdown.querySelector(".dropdown__menu");
    const options = dropdown.querySelectorAll(".dropdown__menu li");
    const selected = dropdown.querySelector(".dropdown__select-value-text");
    select.addEventListener("click", () => {
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
      select.classList.add('dropdown__select--Opened')
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        select.classList.remove('dropdown__select--Opened')
        selected.innerText = option.innerText;
        selected.classList.remove('dropdown__select-value-initialText')
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach((option) => option.classList.remove("active"));
        option.classList.add("active");
      });
    });
  });


})
