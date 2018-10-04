window.addEventListener("scroll", changeCss , false);

function changeCss () {
  var bodyElement = document.querySelector(".navbar");
  this.scrollY > 200 ? bodyElement.style.opacity = 1 : bodyElement.style.opacity = 0.8;
}
