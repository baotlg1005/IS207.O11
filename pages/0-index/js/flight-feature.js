let flightInfo = {
  fightType: "one",
  seatType: "economy",
  haveReturnTrip: false,
  passengerQuantity: {
    adult: 1,
    child: 0,
    baby: 0,
  },
  tripInfos: [],
};

const featureContainer = document.querySelector(".feature-container");
const flightFeatureContainer = document.getElementById(
  "feature-container__flight"
);

// flight-type-toggle: CLICK EVENT

const choiceOneTripType = flightFeatureContainer.querySelector(
  ".flight-type--one-trip"
);
const choiceManyTripType = flightFeatureContainer.querySelector(
  ".flight-type--many-trip"
);

const oneTripForm = flightFeatureContainer.querySelector(
  ".trip-info__form--one-trip"
);
const manyTripForm = flightFeatureContainer.querySelector(
  ".trip-info__form--many-trip"
);
const blurPanel = document.querySelector(".blur-panel");

function SetFlightType(flightType) {
  if (flightType === "one") {
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
  if (choiceOneTripType.classList.contains("active")) return;
  SetFlightType("one");
});
choiceManyTripType.addEventListener("click", () => {
  if (choiceManyTripType.classList.contains("active")) return;
  SetFlightType("many");
});

blurPanel.addEventListener("click", () => {
  SetFlightType("one");
});

featureContainer.querySelector(".feature-container__navbar").addEventListener("click", (e) => {
  if(e.target.classList.contains("active")) return;
  SetFlightType("one");
});


// ticket-info__passenger: CLICK EVENT
const passengerBtn = flightFeatureContainer.querySelector(
  ".ticket-info__passenger"
);
const passengerDropDownPanel = flightFeatureContainer.querySelector(
  ".passenger__dropdown-panel"
);
const passengerQuantityText = passengerBtn.querySelector(
  ".passenger__information"
);
const increaseQuantityBtns = passengerDropDownPanel.querySelectorAll(
  ".set-quantity__icon.increase"
);
const decreaseQuantityBtns = passengerDropDownPanel.querySelectorAll(
  ".set-quantity__icon.decrease"
);

passengerBtn.addEventListener("click", (e) => {
  if (passengerDropDownPanel.contains(e.target)) return;
  passengerDropDownPanel.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  //check e.target is a passengerBtn or a passengerBtn's child
  if (passengerDropDownPanel.classList.contains("hide")) return;
  if (
    !passengerBtn.contains(e.target) &&
    !passengerDropDownPanel.contains(e.target)
  ) {
    passengerDropDownPanel.classList.add("hide");
  }
});

function SetPassengerQuantity() {
  passengerQuantityText.innerHTML = `${flightInfo.passengerQuantity.adult} Người lớn, 
    ${flightInfo.passengerQuantity.child} trẻ em, 
    ${flightInfo.passengerQuantity.baby} em bé`;

  //set quantity for each passenger type
  const passengerType = ["adult", "child", "baby"];
  passengerType.forEach((type) => {
    const quantity = passengerDropDownPanel.querySelector(
      `.panel__item[data-passenger-type=${type}] .set-quantity__quantity`
    );
    quantity.innerHTML = flightInfo.passengerQuantity[type];
  });
}

increaseQuantityBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const quantity = e.target.parentElement.querySelector(
      ".set-quantity__quantity"
    );
    const passengerType =
      e.target.parentElement.parentElement.dataset.passengerType;
    flightInfo.passengerQuantity[passengerType]++;
    SetPassengerQuantity();
  });
});

decreaseQuantityBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const quantity = e.target.parentElement.querySelector(
      ".set-quantity__quantity"
    );
    const passengerType =
      e.target.parentElement.parentElement.dataset.passengerType;
    if (flightInfo.passengerQuantity[passengerType] > 0) {
      flightInfo.passengerQuantity[passengerType]--;
      SetPassengerQuantity();
    }
  });
});

// ticket-info__seat-type: CLICK EVENT
const seatTypeBtn = flightFeatureContainer.querySelector(
  ".ticket-info__seat-type"
);
const seatTypeDropDownPanel = flightFeatureContainer.querySelector(
  ".seat-type__drop-down-panel"
);
const seatTypeDropDownItems = seatTypeDropDownPanel.querySelectorAll(
  ".drop-down-panel__item"
);
const seatTypeValueText = seatTypeBtn.querySelector(".text");

seatTypeBtn.addEventListener("click", (e) => {
  if (seatTypeDropDownPanel.contains(e.target)) return;
  seatTypeDropDownPanel.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  //check e.target is a seatTypeBtn or a seatTypeBtn's child
  if (
    !seatTypeBtn.contains(e.target) &&
    !seatTypeDropDownPanel.contains(e.target)
  ) {
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

const checkBoxHaveReturnTrip = flightFeatureContainer.querySelector(
  "#flight-trip-info__have-return"
);
const returnDateInput = flightFeatureContainer.querySelector(
  ".date__return .input"
);

checkBoxHaveReturnTrip.addEventListener("change", (e) => {
  if (e.target.checked) {
    returnDateInput.classList.remove("disabled");
    flightInfo.haveReturnTrip = true;
  } else {
    returnDateInput.classList.add("disabled");
    flightInfo.haveReturnTrip = false;
  }
});


//many-trip info: ADD TRIP and REMOVE TRIP
const addTripBtn = manyTripForm.querySelector(".trip-info__add-more-btn");
const submitBtn = manyTripForm.querySelector(".trip-info--many-trip__submit-btn");
const tripInfoInputContainer = manyTripForm.querySelector(".trip-info__form--many-trip__container");
const tripInfoInputTemplate = manyTripForm.querySelector(".trip-info--many-trip.template");
const tripInfoInputList = [];

let nextTripId = 0;

function AddTripInfoInput() {
  const tripInfo = tripInfoInputTemplate.cloneNode(true);
  tripInfo.classList.remove("template");
  tripInfo.classList.remove("hide");
  tripInfo.id = `flight-trip-info--${nextTripId}`;
  nextTripId++;

  //add event listener for remove trip btn
  const removeTripBtn = tripInfo.querySelector(".remove-trip-btn");
  removeTripBtn.addEventListener("click", (e) => {
    tripInfoInputList.splice(tripInfoInputList.indexOf(tripInfo), 1);
    tripInfo.remove();
    if(tripInfoInputList.length < 4) addTripBtn.classList.remove("disabled");
    if(tripInfoInputList.length < 3) tripInfoInputContainer.classList.remove("can-remove-trip");
  });

  tripInfoInputList.push(tripInfo);
  tripInfoInputContainer.appendChild(tripInfo);
}

addTripBtn.addEventListener("click", () => {
  if(addTripBtn.classList.contains("disabled")) return;
  AddTripInfoInput();
  if(tripInfoInputList.length == 4) addTripBtn.classList.add("disabled");
  if(tripInfoInputList.length > 2) {
    tripInfoInputContainer.classList.add("can-remove-trip");
    //scroll fit all content to screen
    flightFeatureContainer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
});	


//TODO:  one-trip info
//TODO:  many-trip info

//set default flight info
AddTripInfoInput();
AddTripInfoInput();

SetFlightType(flightInfo.fightType);
SetPassengerQuantity(flightInfo.passengerQuantity);
