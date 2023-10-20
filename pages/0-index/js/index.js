window.onscroll = function() {scrollFunction()};

//DONE: scroll function: change header background color and text color on scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("on-scroll");
  } else {
    document.getElementById("header").classList.remove("on-scroll");
  }
}

//DONE: selected feature: change feature container when click to a feature nav btn
const featureButtons = document.querySelectorAll('.feature-container__navbar .navbar__item');
const featureContainers = document.querySelectorAll('.feature-container__item');''
featureButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    featureButtons.forEach(btn => btn.classList.remove('selected'));
    btn.classList.add('selected');
    const target = btn.dataset.featureType;
    featureContainers.forEach(feature => {
      feature.classList.remove('show');
      feature.classList.add('hide');
      if (feature.dataset.featureType === target) {
        feature.classList.add('show');
        feature.classList.remove('hide');
      }
    });
  });
});


//feature-container
//--plane--
const planeFeatureContainer = document.querySelector('.feature-container__plane');
const tripTypeToggle = {
  toggleButton: planeFeatureContainer.querySelector('.plane__trip-type-toggle'),
  toggleIndex: 0,
}
const selectPassengerBtn = planeFeatureContainer.querySelector('.plane__select-passenger-btn');
const filterSeatBtn = planeFeatureContainer.querySelector('.plane__filter-seat-btn');







