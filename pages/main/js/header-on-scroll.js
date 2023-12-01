window.onscroll = function() {scrollFunction()};

//DONE: scroll function: change header background color and text color on scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("on-scroll");
  } else {
    document.getElementById("header").classList.remove("on-scroll");
  }
}
