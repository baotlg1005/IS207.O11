

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