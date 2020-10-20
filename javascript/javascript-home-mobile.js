/*----------------------------ANIMAÇÃO NAVBAR-----------------------*/
const navbarButtonToggle = () => {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var iconHamburger = document.querySelector(".navbar-toggler-icon");
  var iconClose = document.querySelector(".navbar-toggler-icon-close");

  navbarToggler.addEventListener("click", () => {
    iconHamburger.classList.toggle("d-none");
    iconClose.classList.toggle("d-none");
  });
};
navbarButtonToggle();