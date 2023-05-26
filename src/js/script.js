const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

let fecharMenu = document.querySelectorAll(".fechar-menu");

fecharMenu.forEach((element) => {
  element.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  });
});


const question = document.querySelectorAll(".questions");

question.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("ativo");
  });
});


var carousel = document.querySelector(".carousel");
      var cardWidth = document.querySelector(".card").offsetWidth;
      var offset = 0;

      function moveLeft() {
        offset += cardWidth + 20;
        if (offset > 0) {
          offset = 0;
        }
        carousel.style.transform = "translateX(" + offset + "px)";
      }

      function moveRight() {
        offset -= cardWidth + 20;
        var maxOffset = -(carousel.scrollWidth - carousel.offsetWidth - 20);
        if (offset < maxOffset) {
          offset = maxOffset;
        }
        carousel.style.transform = "translateX(" + offset + "px)";
      }

      document.querySelector(".nav-left").addEventListener("click", moveLeft);
      document.querySelector(".nav-right").addEventListener("click", moveRight);