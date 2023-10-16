window.onscroll = function() {scrollFunction()};

//scroll function: change header background color and text color on scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("on-scroll");
  } else {
    document.getElementById("header").classList.remove("on-scroll");
  }
}

//selected feature 
const featureBtns = document.querySelectorAll('.feature-container__navbar .navbar__item');
const featureContainers = document.querySelectorAll('.feature-container__item');
console.log(featureBtns);
featureBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    featureBtns.forEach(btn => btn.classList.remove('selected'));
    btn.classList.add('selected');
    const target = btn.dataset.featureType;
    featureContainers.forEach(feature => {
      feature.classList.remove('active');
      if (feature.dataset.featureType === target) {
        feature.classList.add('active');
      }
    });
  });
});