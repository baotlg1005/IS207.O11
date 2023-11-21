//FLIGHT
const flightInfoForm = document.getElementById("flight-info-form");
const flightInfoFormInputs = {
  action: flightInfoForm.querySelector("#flight-txt-action"),
  id: flightInfoForm.querySelector("#flight-txt-id"),
  name: flightInfoForm.querySelector("#flight-txt-name"),
  seat: flightInfoForm.querySelector("#flight-txt-seat"),
  price: flightInfoForm.querySelector("#flight-txt-price"),
  location: flightInfoForm.querySelector("#flight-txt-location"),
  destination: flightInfoForm.querySelector("#flight-txt-destination"),
  stop: flightInfoForm.querySelector("#flight-txt-stop"),
  date: flightInfoForm.querySelector("#flight-txt-date"),
  startTime: flightInfoForm.querySelector("#flight-txt-startTime"),
  arrivalTime: flightInfoForm.querySelector("#flight-txt-arrivalTime"),
  time: flightInfoForm.querySelector("#flight-txt-time"),
};
const flightSubmitBtn = document.getElementById("flight-btn-save");
const flightClearBtn = document.getElementById("flight-btn-clear");

const flightTable = document.getElementById("flight-table");
const flightInfoModifyButtons =
  flightTable.querySelectorAll(".table-btn-modify");
const flightInfoDeleteButtons =
  flightTable.querySelectorAll(".table-btn-delete");

flightInfoModifyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const flightInfoRow = button.closest("tr");
    const flightInfoRowCells = flightInfoRow.querySelectorAll("td");
    console.log(flightInfoRowCells);

    const odlIdOption = flightInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.remove("hide");
    odlIdOption.innerText = flightInfoRowCells[0].innerText;
    odlIdOption.value = flightInfoRowCells[0].innerText;
    odlIdOption.selected = true;

    if (flightInfoRowCells[2].innerText == "Phổ thông") {
      flightInfoFormInputs.seat.value = "economy";
    } else if (flightInfoRowCells[2].innerText == "Thương gia") {
      flightInfoFormInputs.seat.value = "business";
    } else {
      flightSeat.innerText = "";
    }

    flightInfoFormInputs.date.value = ChangeTextToDate(
      flightInfoRowCells[7].innerText
    );

    flightInfoFormInputs.name.value = flightInfoRowCells[1].innerText;
    flightInfoFormInputs.price.value = flightInfoRowCells[3].innerText;
    flightInfoFormInputs.location.value = flightInfoRowCells[4].innerText;
    flightInfoFormInputs.destination.value = flightInfoRowCells[5].innerText;
    flightInfoFormInputs.stop.value = flightInfoRowCells[6].innerText;
    flightInfoFormInputs.startTime.value = flightInfoRowCells[8].innerText;
    flightInfoFormInputs.arrivalTime.value = flightInfoRowCells[9].innerText;
    flightInfoFormInputs.time.value = flightInfoRowCells[10].innerText;

    flightInfoFormInputs.action.value = "update";

    if(CheckAllInputFilled(flightInfoFormInputs)){
        flightSubmitBtn.disabled = false;
    }
  });
});

//Thứ 5, 9 thg 11 2023 -> 2023-11-09
function ChangeTextToDate(text) {
  if (text == "") {
    return "";
  }
  //check if text is already in date format yyyy-mm-dd or not
  if (text.split("-").length == 3) {
    return text;
  }
  
  let date = text.split(" ");
  let day = date[2];
  let month = date[4];
  let year = date[5];
  return formatDate(new Date(year, month, day));
}

function formatDate(date = new Date()) {
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", {
    month: "2-digit",
  });
  const day = date.toLocaleString("default", { day: "2-digit" });

  let textDate = [year, month, day].join("-");
  //increase month by 1
  textDate = textDate.split("-")[0] + "-" + (parseInt(textDate.split("-")[1]) - 1) + "-" + textDate.split("-")[2];
  return textDate;
}


function CheckAllInputFilled(inputs){
    //input is a object
    for (const input in inputs) {
        if (inputs[input].value == "") {
            return false;
        }
    }
    return true;
}

for (const key in flightInfoFormInputs){
    flightInfoFormInputs[key].addEventListener("input", (e) => {
        if (CheckAllInputFilled(flightInfoFormInputs)) {
            flightSubmitBtn.disabled = false;
        } else {
            flightSubmitBtn.disabled = true;
        }
    });
}

flightClearBtn.addEventListener("click", (e) => {
    flightSubmitBtn.disabled = true;
    flightInfoFormInputs.action.value = "create";

    const odlIdOption = flightInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.add("hide");
    odlIdOption.selected = false;
});
