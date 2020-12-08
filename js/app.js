const modal = document.querySelector(".pos-fixed");
const reviewBtn = document.querySelector(".review__btn");

reviewBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.toggle("open");
});

const mobMenu = document.querySelector(".header-menu");
const closeBtn = document.querySelector(".header-menu__close");
const openMenu = document.querySelector(".header-menu-trigger");

openMenu.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.toggle("open-menu");
});

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.toggle("open-menu");
});
