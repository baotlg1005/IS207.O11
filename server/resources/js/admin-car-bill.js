const carBillInfoForm = document.getElementById("carbill-info-form");
const carBillInfoFormInputs = {
    action: carBillInfoForm.querySelector("#carbill-txt-action"),
    billid: carBillInfoForm.querySelector("#carbill-txt-billid"),
    carid: carBillInfoForm.querySelector("#carbill-txt-carid"),
    userid: carBillInfoForm.querySelector("#carbill-txt-userid"),
    username: carBillInfoForm.querySelector("#carbill-txt-username"),
    rentTime: carBillInfoForm.querySelector("#carbill-txt-rentTime"),
    returnTime: carBillInfoForm.querySelector("#carbill-txt-returnTime"),
    price: carBillInfoForm.querySelector("#carbill-txt-price"),
    status: carBillInfoForm.querySelector("#carbill-txt-status"),
};
const carBillSubmitBtn = document.getElementById("carbill-btn-save");

const carBillTable = document.getElementById("carbill-table");
const carBillInfoModifyButtons =
    carBillTable.querySelectorAll(".table-btn-modify");
const carBillInfoDeleteButtons =
    carBillTable.querySelectorAll(".table-btn-delete");

carBillInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const carBillInfoRow = button.closest("tr");
        const carBillInfoRowCells = carBillInfoRow.querySelectorAll("td");
        console.log(carBillInfoRow);

        if (carBillInfoRowCells[7].innerText == "Chưa thanh toán") {
            carBillInfoFormInputs.status.selectedIndex = 0;
        } else if (carBillInfoRowCells[7].innerText == "Đã thanh toán") {
            carBillInfoFormInputs.status.selectedIndex = 1;
        } else {
            carBillInfoFormInputs.status.selectedIndex = 0;
        }

        carBillInfoFormInputs.billid.value = carBillInfoRowCells[0].innerText;
        carBillInfoFormInputs.carid.value = carBillInfoRowCells[1].innerText;
        carBillInfoFormInputs.userid.value = carBillInfoRowCells[2].innerText;
        carBillInfoFormInputs.username.value = carBillInfoRowCells[3].innerText;
        carBillInfoFormInputs.rentTime.value = carBillInfoRowCells[4].innerText;
        carBillInfoFormInputs.returnTime.value = carBillInfoRowCells[5].innerText;
        carBillInfoFormInputs.price.value = carBillInfoRowCells[6].innerText;

        carBillInfoFormInputs.action.value = "update";

        if (CheckAllInputFilled(carBillInfoFormInputs)) {
            carBillSubmitBtn.disabled = false;
        }
    });
});

