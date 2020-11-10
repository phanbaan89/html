function slider(image) {
  document.querySelector(".img-box img").src = "./assets/images/" + image;
}
function changeColor(color) {
  var circle = document.querySelector(".circle");
  circle.style.backgroundColor = color;
}
