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
//--flight--
const flightFeatureContainer = document.querySelector('.feature-container__flight');
const flightTypeToggle = {
  toggleButtons: flightFeatureContainer.querySelectorAll('.flight__flight-type-toggle .btn-toggle'),
  currentToggleIndex: 0,
}
const selectPassengerBtn = flightFeatureContainer.querySelector('.flight__select-passenger-btn');
const filterSeatBtn = flightFeatureContainer.querySelector('.flight__filter-seat-btn');

const oneFlightElement = [
  flightFeatureContainer.querySelector('.flight-info-item--one-flight'),
];
const manyFlightElement = [
  flightFeatureContainer.querySelector('.flight__many-flight-btn-group'),
  flightFeatureContainer.querySelector('.flight-info-item--many-flight'),
];

// toggle flight type 
// -> if one flight -> show one flight element, hide many flight element 
// -> if many flight -> show many flight element, hide one flight element
flightTypeToggle.toggleButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const flightType = this.dataset.flightType;
    flightTypeToggle.currentToggleIndex = flightType === 'one' ? 0 : 1;
    flightTypeToggle.toggleButtons.forEach(btn => btn.classList.remove('on'));
    this.classList.add('on');

    if(flightType === 'one') {
      oneFlightElement.forEach(el => el.classList.remove('hide'));
      manyFlightElement.forEach(el => el.classList.add('hide'));
    }
    else {
      oneFlightElement.forEach(el => el.classList.add('hide'));
      manyFlightElement.forEach(el => el.classList.remove('hide'));
    }
  })
});

// checkbox have-return-flight
const haveReturnFlightCheckbox = document.getElementById("flight-return-checkbox");
const returnDateSelectDropdown = flightFeatureContainer.querySelector('.return-date__select-dropdown');
// add a event listener to checkbox
// -> if checked -> enable return date select dropdown else disable
haveReturnFlightCheckbox.addEventListener('change', function(e) {
  if(this.checked) {
    returnDateSelectDropdown.classList.remove('disable');
  }
  else {
    returnDateSelectDropdown.classList.add('disable');
  }
});

