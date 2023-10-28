let fightType = "one";
let seatType = "economy";


const flightFeatureContainer = document.getElementById("feature-container__flight");

// flight-type-toggle: CLICK EVENT
const flightTypeToggles = flightFeatureContainer.querySelectorAll(".flight__flight-type .flight-type-toggle");

flightTypeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    flightTypeToggles.forEach((toggle) => {
      toggle.classList.remove("active");
    });
    toggle.classList.add("active");
    fightType = toggle.dataset.flightType;
  });
});

// ticket-info__seat-type: CLICK EVENT
const seatTypeBtn = flightFeatureContainer.querySelector(".ticket-info__seat-type");
const seatTypeDropDownPanel = flightFeatureContainer.querySelector(".seat-type__drop-down-panel");
const seatTypeDropDownItems = seatTypeDropDownPanel.querySelectorAll(".drop-down-panel__item");
const seatTypeValueText = seatTypeBtn.querySelector(".text");

seatTypeBtn.addEventListener("click", (e) => {
  if(seatTypeDropDownPanel.contains(e.target)) return;
  seatTypeDropDownPanel.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  //check e.target is a seatTypeBtn or a seatTypeBtn's child
  if (!seatTypeBtn.contains(e.target) && !seatTypeDropDownPanel.contains(e.target)) {
    seatTypeDropDownPanel.classList.remove("active");
  }
});

seatTypeDropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    seatTypeValueText.innerHTML = item.querySelector(".text").innerHTML;
    seatType = item.dataset.seatType;
    seatTypeDropDownPanel.classList.remove("active");
  });
});