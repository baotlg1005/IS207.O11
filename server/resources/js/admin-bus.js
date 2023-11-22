const busInfoForm = document.getElementById("bus-info-form");
const busInfoFormInputs = {
    action: busInfoForm.querySelector("#bus-txt-action"),
    id: busInfoForm.querySelector("#bus-txt-id"),
    seat: busInfoForm.querySelector("#bus-txt-seat"),
    price: busInfoForm.querySelector("#bus-txt-price"),
    name: busInfoForm.querySelector("#bus-txt-name"),
    location: busInfoForm.querySelector("#bus-txt-location"),
    destination: busInfoForm.querySelector("#bus-txt-destination"),
    startTime: busInfoForm.querySelector("#bus-txt-startTime"),
    arrivalTime: busInfoForm.querySelector("#bus-txt-arrivalTime"),
};
const busSubmitBtn = document.getElementById("bus-btn-save");
const busClearBtn = document.getElementById("bus-btn-clear");

const busTable = document.getElementById("bus-table");
const busInfoModifyButtons =
    busTable.querySelectorAll(".table-btn-modify");
const userInfoDeleteButtons =
    busTable.querySelectorAll(".table-btn-delete");

busInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const busInfoRow = button.closest("tr");
        const busInfoRowCells = busInfoRow.querySelectorAll("td");
        console.log(busInfoRowCells);

        const odlIdOption = busInfoFormInputs.id.querySelector('option.old-id');
        odlIdOption.classList.remove("hide");
        odlIdOption.innerText = busInfoRowCells[0].innerText;
        odlIdOption.value = busInfoRowCells[0].innerText;
        odlIdOption.selected = true;

        busInfoFormInputs.name.value = busInfoRowCells[2].innerText;
        busInfoFormInputs.seat.value = busInfoRowCells[1].innerText;
        busInfoFormInputs.location.value = busInfoRowCells[3].innerText;
        busInfoFormInputs.price.value = busInfoRowCells[7].innerText;
        busInfoFormInputs.startTime.value = busInfoRowCells[5].innerText;
        busInfoFormInputs.destination.value = busInfoRowCells[4].innerText;
        busInfoFormInputs.arrivalTime.value = busInfoRowCells[6].innerText;

        busInfoFormInputs.action.value = "update";

        if (CheckAllInputFilled(busInfoFormInputs)) {
            carSubmitBtn.disabled = false;
        }
    });
});

for (const key in busInfoFormInputs) {
    busInfoFormInputs[key].addEventListener("input", (e) => {
        if (CheckAllInputFilled(busInfoFormInputs)) {
            busSubmitBtn.disabled = false;
        } else {
            busSubmitBtn.disabled = true;
        }
    });
}

busClearBtn.addEventListener("click", (e) => {
    busSubmitBtn.disabled = true;
    busInfoFormInputs.action.value = "create";

    const odlIdOption = busInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.add("hide");
    odlIdOption.selected = false;
});
