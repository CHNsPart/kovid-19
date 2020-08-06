var nav1 = document.querySelector("#nv1");
var nav2 = document.querySelector("#nv2");
var nav3 = document.querySelector("#nv3");
var spa = document.querySelector("#resh1");
var dateC = document.querySelector("#dateC");
var dateR = document.querySelector("#dateR");

nav1.addEventListener("click", function () {
  nav1.classList.add("activated");
});
nav2.addEventListener("click", function () {
  nav2.classList.add("activated");
  nav1.classList.remove("activated");
  nav3.classList.remove("activated");
});
nav3.addEventListener("click", function () {
  nav3.classList.add("activated");
  nav1.classList.remove("activated");
  nav3.classList.remove("activated");
});