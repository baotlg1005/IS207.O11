let flightInfo = {
  fightType: "one",
  seatType: "economy",
  tripInfos: [],
}

const featureContainer = document.querySelector(".feature-container");
const flightFeatureContainer = document.getElementById("feature-container__flight");

// flight-type-toggle: CLICK EVENT

const choiceOneTripType = flightFeatureContainer.querySelector(".flight-type--one-trip");
const choiceManyTripType = flightFeatureContainer.querySelector(".flight-type--many-trip");

const oneTripForm = flightFeatureContainer.querySelector(".trip-info__form--one-trip");
const manyTripForm = flightFeatureContainer.querySelector(".trip-info__form--many-trip");
const blurPanel = document.querySelector(".blur-panel");

function SetFlightType(flightType) {
  if(flightType === "one") {
    choiceOneTripType.classList.add("active");
    choiceManyTripType.classList.remove("active");
    oneTripForm.classList.remove("hide");
    manyTripForm.classList.add("hide");
    blurPanel.classList.add("hide");
    featureContainer.classList.remove("floating-container");
  } else {
    choiceManyTripType.classList.add("active");
    choiceOneTripType.classList.remove("active");
    manyTripForm.classList.remove("hide");
    oneTripForm.classList.add("hide");
    blurPanel.classList.remove("hide");
    featureContainer.classList.add("floating-container");
  }
}

choiceOneTripType.addEventListener("click", () => {
  if(choiceOneTripType.classList.contains("active")) return;
  SetFlightType("one");
});
choiceManyTripType.addEventListener("click", () => {
  if(choiceManyTripType.classList.contains("active")) return;
  SetFlightType("many");
});

blurPanel.addEventListener("click", () => {
  SetFlightType("one");
});
featureContainer.addEventListener("click", (e) => {
  if(flightFeatureContainer.contains(e.target)) return;
  SetFlightType("one");
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

let seatTypeSelected = seatTypeDropDownPanel.querySelector(".selected");
seatTypeDropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    seatTypeValueText.innerHTML = item.querySelector(".text").innerHTML;
    flightInfo.seatType = item.dataset.seatType;
    seatTypeDropDownPanel.classList.remove("active");

    seatTypeSelected.classList.remove("selected");
    seatTypeSelected = item;
    seatTypeSelected.classList.add("selected");
  });
});

{/* <div class="input-block date__return">
  <div class="title">
      <input type="checkbox" name="" id="flight-trip-info__have-return">
      Khứ hồi
  </div>
  <div class="input">
      <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
      <input 
          id="flight-trip-info__return-date" 
          class="return-date__input" 
          type="date" 
          placeholder="Ngày về">
  </div>
</div> */}

const checkBoxHaveReturnTrip = flightFeatureContainer.querySelector("#flight-trip-info__have-return");
const returnDateInput = flightFeatureContainer.querySelector(".date__return .input");

checkBoxHaveReturnTrip.addEventListener("change", (e) => {
  if(e.target.checked){
    returnDateInput.classList.remove("disabled");
  } else {
    returnDateInput.classList.add("disabled");
  }
});


const manyTripInfos = []

const addMoreBtn = flightFeatureContainer.querySelector(".trip-info__add-more-btn");
const manyTripInfoContainer = flightFeatureContainer.querySelector(".trip-info__form--many-trip__container");
const manyTripInfoTemplate = manyTripInfoContainer.querySelector(".trip-info--many-trip.template");

function AddNewManyTripInfo(){
  const newManyTripInfo = manyTripInfoTemplate.cloneNode(true);
  newManyTripInfo.classList.remove("template");
  newManyTripInfo.classList.remove("hide");
  newManyTripInfo.id = newManyTripInfo.id + manyTripInfos.length;
  manyTripInfoContainer.appendChild(newManyTripInfo);
  manyTripInfos.push(newManyTripInfo);
  return newManyTripInfo; 
}

addMoreBtn.addEventListener("click", () => {
  if(manyTripInfos.length >= 4) return;
  AddNewManyTripInfo();
  if(manyTripInfos.length == 4){
    addMoreBtn.classList.add("disabled");
  }
});

//run to create 2 default many-trip info
AddNewManyTripInfo();
AddNewManyTripInfo();

//TODO:  one-trip info
//TODO:  many-trip info