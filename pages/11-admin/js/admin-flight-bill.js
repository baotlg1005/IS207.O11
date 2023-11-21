const flightBillInfoForm = document.getElementById("flightbill-info-form");
const flightBillInfoFormInputs = {
    billid: flightBillInfoForm.querySelector("#flightbill-txt-billid"),
    flightid: flightBillInfoForm.querySelector("#flightbill-txt-flightid"),
    userid: flightBillInfoForm.querySelector("#flightbill-txt-userid"),
    username: flightBillInfoForm.querySelector("#flightbill-txt-username"),
    seat: flightBillInfoForm.querySelector("#flightbill-txt-seat"),
    price: flightBillInfoForm.querySelector("#flightbill-txt-price"),
    status: flightBillInfoForm.querySelector("#flightbill-txt-status"),
};
const flightBillSubmitBtn = document.getElementById("flightbill-btn-save");

const flightBillTable = document.getElementById("flightbill-table");
const flightBillInfoModifyButtons =
    flightBillTable.querySelectorAll(".table-btn-modify");
const flightBillInfoDeleteButtons =
    flightBillTable.querySelectorAll(".table-btn-delete");

flightBillInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const flightBillInfoRow = button.closest("tr");
        const flightBillInfoRowCells = flightBillInfoRow.querySelectorAll("td");
        console.log(flightBillInfoRow);

        if (flightBillInfoRowCells[6].innerText == "Chưa thanh toán") {
            flightBillInfoFormInputs.status.selectedIndex = 0;
        } else if (flightBillInfoRowCells[6].innerText == "Đã thanh toán") {
            flightBillInfoFormInputs.status.selectedIndex = 1;
        } else {
            flightBillInfoFormInputs.status.selectedIndex = 0;
        }

        flightBillInfoFormInputs.billid.value = flightBillInfoRowCells[0].innerText;
        flightBillInfoFormInputs.flightid.value = flightBillInfoRowCells[1].innerText;
        flightBillInfoFormInputs.userid.value = flightBillInfoRowCells[2].innerText;
        flightBillInfoFormInputs.username.value = flightBillInfoRowCells[3].innerText;
        flightBillInfoFormInputs.seat.value = flightBillInfoRowCells[4].innerText;
        flightBillInfoFormInputs.price.value = flightBillInfoRowCells[5].innerText;
    });
});

