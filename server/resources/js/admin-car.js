const carInfoForm = document.getElementById("car-info-form");
const carInfoFormInputs = {
    action: carInfoForm.querySelector("#car-txt-action"),
    id: carInfoForm.querySelector("#car-txt-id"),
    type: carInfoForm.querySelector("#car-txt-type"),
    name: carInfoForm.querySelector("#car-txt-name"),
    seat: carInfoForm.querySelector("#car-txt-seat"),
    luggage: carInfoForm.querySelector("#car-txt-luggage"),
    price: carInfoForm.querySelector("#car-txt-price"),
    state: carInfoForm.querySelector("#car-txt-state")
};
const carSubmitBtn = document.getElementById("car-btn-save");
const carClearBtn = document.getElementById("car-btn-clear");

const carTable = document.getElementById("car-table");
const carInfoModifyButtons =
    carTable.querySelectorAll(".table-btn-modify");
const userInfoDeleteButtons =
    carTable.querySelectorAll(".table-btn-delete");

carDataTable.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
    const carInfoRow = e.currentTarget.closest("tr");


    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        carDataTable.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
        console.log(carInfoRow);
        getInfoFromRow(carInfoRow);
    }
});

function getInfoFromRow(carInfoRow) {
    const carInfoRowCells = carInfoRow.querySelectorAll("td");
    console.log(carInfoRowCells);

    const odlIdOption = carInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.remove("hide");
    odlIdOption.innerText = carInfoRowCells[0].innerText;
    odlIdOption.value = carInfoRowCells[0].innerText;
    odlIdOption.selected = true;


    if (carInfoRowCells[1].innerText == "Có tài xế") {
        carInfoFormInputs.type.selectedIndex = 0;
    } else if (carInfoRowCells[1].innerText == "Tự lái") {
        carInfoFormInputs.type.selectedIndex = 1;
    } else {
        carInfoFormInputs.type.selectedIndex = 0;
    }

    if (carInfoRowCells[6].innerText == "Free") {
        carInfoFormInputs.state.selectedIndex = 0;
    }
    else if (carInfoRowCells[6].innerText == "Rented") {
        carInfoFormInputs.state.selectedIndex = 1;
    }
    else {
        carInfoFormInputs.state.selectedIndex = 0;
    }

    carInfoFormInputs.name.value = carInfoRowCells[2].innerText;
    carInfoFormInputs.seat.value = carInfoRowCells[3].innerText;
    carInfoFormInputs.luggage.value = carInfoRowCells[4].innerText;
    carInfoFormInputs.price.value = carInfoRowCells[5].innerText;

    carInfoFormInputs.action.value = "update";

    // if (CheckAllInputFilled(userInfoFormInputs)) {
    //     userSubmitBtn.disabled = false;
    // }
}


// carInfoModifyButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         const carInfoRow = button.closest("tr");
//         const carInfoRowCells = carInfoRow.querySelectorAll("td");
//         console.log(carInfoRowCells);

//         const odlIdOption = carInfoFormInputs.id.querySelector('option.old-id');
//         odlIdOption.classList.remove("hide");
//         odlIdOption.innerText = carInfoRowCells[0].innerText;
//         odlIdOption.value = carInfoRowCells[0].innerText;
//         odlIdOption.selected = true;


//         if (carInfoRowCells[1].innerText == "Có tài xế") {
//             carInfoFormInputs.type.selectedIndex = 0;
//         } else if (carInfoRowCells[1].innerText == "Tự lái") {
//             carInfoFormInputs.type.selectedIndex = 1;
//         } else {
//             carInfoFormInputs.type.selectedIndex = 0;
//         }

//         carInfoFormInputs.name.value = carInfoRowCells[2].innerText;
//         carInfoFormInputs.seat.value = carInfoRowCells[3].innerText;
//         carInfoFormInputs.luggage.value = carInfoRowCells[4].innerText;
//         carInfoFormInputs.price.value = carInfoRowCells[5].innerText;

//         carInfoFormInputs.action.value = "update";

//         if (CheckAllInputFilled(carInfoFormInputs)) {
//             carSubmitBtn.disabled = false;
//         }
//     });
// });

// for (const key in carInfoFormInputs) {
//     carInfoFormInputs[key].addEventListener("input", (e) => {
//         if (CheckAllInputFilled(carInfoFormInputs)) {
//             carSubmitBtn.disabled = false;
//         } else {
//             carSubmitBtn.disabled = true;
//         }
//     });
// }

carClearBtn.addEventListener("click", (e) => {
    carSubmitBtn.disabled = true;
    carInfoFormInputs.action.value = "create";

    const odlIdOption = carInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.add("hide");
    odlIdOption.selected = false;
});
