const hotelInfoForm = document.getElementById("hotel-info-form");
const hotelInfoFormInputs = {
    action: hotelInfoForm.querySelector("#hotel-txt-action"),
    id: hotelInfoForm.querySelector("#hotel-txt-id"),
    name: hotelInfoForm.querySelector("#hotel-txt-name"),
    address: hotelInfoForm.querySelector("#hotel-txt-address"),
    roomId: hotelInfoForm.querySelector("#hotel-txt-roomId"),
    maxGuest: hotelInfoForm.querySelector("#hotel-txt-maxGuest"),
    roomPrice: hotelInfoForm.querySelector("#hotel-txt-roomPrice"),
};
const hotelSubmitBtn = document.getElementById("hotel-btn-save");
const hotelClearBtn = document.getElementById("hotel-btn-clear");

const hotelTable = document.getElementById("hotel-table");
const hotelInfoModifyButtons =
    hotelTable.querySelectorAll(".table-btn-modify");
const hotelInfoDeleteButtons =
    hotelTable.querySelectorAll(".table-btn-delete");

hotelInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const hotelInfoRow = button.closest("tr");
        const hotelInfoRowCells = hotelInfoRow.querySelectorAll("td");
        console.log(hotelInfoRowCells);

        const odlIdOption = hotelInfoFormInputs.id.querySelector('option.old-id');
        odlIdOption.classList.remove("hide");
        odlIdOption.innerText = hotelInfoRowCells[0].innerText;
        odlIdOption.value = hotelInfoRowCells[0].innerText;
        odlIdOption.selected = true;

        const odlIdOption2 = hotelInfoFormInputs.roomId.querySelector('option.old-id2');
        odlIdOption2.classList.remove("hide");
        odlIdOption2.innerText = hotelInfoRowCells[3].innerText;
        odlIdOption2.value = hotelInfoRowCells[3].innerText;
        odlIdOption2.selected = true;

        hotelInfoFormInputs.name.value = hotelInfoRowCells[1].innerText;
        hotelInfoFormInputs.address.value = hotelInfoRowCells[2].innerText;
        hotelInfoFormInputs.maxGuest.value = hotelInfoRowCells[4].innerText;
        hotelInfoFormInputs.roomPrice.value = hotelInfoRowCells[5].innerText;

        hotelInfoFormInputs.action.value = "update";

        if (CheckAllInputFilled(hotelInfoFormInputs)) {
            hotelSubmitBtn.disabled = false;
        }
    });
});

function CheckAllInputFilled(inputs) {
    //input is a object
    for (const input in inputs) {
        if (inputs[input].value == "") {
            return false;
        }
    }
    return true;
}

for (const key in hotelInfoFormInputs) {
    hotelInfoFormInputs[key].addEventListener("input", (e) => {
        if (CheckAllInputFilled(hotelInfoFormInputs)) {
            hotelSubmitBtn.disabled = false;
        } else {
            hotelSubmitBtn.disabled = true;
        }
    });
}

hotelClearBtn.addEventListener("click", (e) => {
    hotelSubmitBtn.disabled = true;
    hotelInfoFormInputs.action.value = "create";

    const odlIdOption = hotelInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.add("hide");
    odlIdOption.selected = false;

    const odlIdOption2 = hotelInfoFormInputs.roomId.querySelector('option.old-id2');
    odlIdOption2.classList.add("hide");
    odlIdOption2.selected = false;
});
