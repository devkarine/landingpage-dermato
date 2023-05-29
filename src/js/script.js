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


var slideContainer = document.getElementById('slide-container');
var slide = document.querySelector('.slide');
var isMouseDown = false;
var startX = 0;
var scrollLeft = 0;

slideContainer.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  startX = e.pageX;
  scrollLeft = slideContainer.scrollLeft;
});

slideContainer.addEventListener('mousemove', function(e) {
  if (!isMouseDown) return;
  e.preventDefault();
  var x = e.pageX;
  var scrollDistance = x - startX;
  slideContainer.scrollLeft = scrollLeft - scrollDistance;
});

slideContainer.addEventListener('mouseup', function() {
  isMouseDown = false;
});

slideContainer.addEventListener('mouseleave', function() {
  isMouseDown = false;
});