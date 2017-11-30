const d = document;
const date = new Date();
const bgLeft = new Image();
const bgRight = new Image();
bgLeft.src = "images/button_bg_left.jpg";
bgRight.src = "images/button_bg_right.jpg";
window.onload = () => d.getElementById("year").innerHTML = date.getFullYear();
