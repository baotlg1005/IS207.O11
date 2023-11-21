const busBillInfoForm = document.getElementById("busbill-info-form");
const busBillInfoFormInputs = {
    billid: busBillInfoForm.querySelector("#busbill-txt-billid"),
    ticketid: busBillInfoForm.querySelector("#busbill-txt-ticketid"),
    carid: busBillInfoForm.querySelector("#busbill-txt-carid"),
    userid: busBillInfoForm.querySelector("#busbill-txt-userid"),
    username: busBillInfoForm.querySelector("#busbill-txt-username"),
    checkin: busBillInfoForm.querySelector("#busbill-txt-checkin"),
    checkout: busBillInfoForm.querySelector("#busbill-txt-checkout"),
    price: busBillInfoForm.querySelector("#busbill-txt-price"),
    status: busBillInfoForm.querySelector("#busbill-txt-status"),
};
const busBillSubmitBtn = document.getElementById("busbill-btn-save");

const busBillTable = document.getElementById("busbill-table");
const busBillInfoModifyButtons =
busBillTable.querySelectorAll(".table-btn-modify");
const busBillInfoDeleteButtons =
busBillTable.querySelectorAll(".table-btn-delete");

busBillInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const busBillInfoRow = button.closest("tr");
        const busBillInfoRowCells = busBillInfoRow.querySelectorAll("td");
        console.log(busBillInfoRow);

        if (busBillInfoRowCells[8].innerText == "Chưa thanh toán") {
            busBillInfoFormInputs.status.selectedIndex = 0;
        } else if (busBillInfoRowCells[8].innerText == "Đã thanh toán") {
            busBillInfoFormInputs.status.selectedIndex = 1;
        } else {
            busBillInfoFormInputs.status.selectedIndex = 0;
        }

        busBillInfoFormInputs.billid.value = busBillInfoRowCells[0].innerText;
        busBillInfoFormInputs.ticketid.value = busBillInfoRowCells[1].innerText;
        busBillInfoFormInputs.carid.value = busBillInfoRowCells[2].innerText;
        busBillInfoFormInputs.userid.value = busBillInfoRowCells[3].innerText;
        busBillInfoFormInputs.username.value = busBillInfoRowCells[4].innerText;
        busBillInfoFormInputs.checkin.value = busBillInfoRowCells[5].innerText;
        busBillInfoFormInputs.checkout.value = busBillInfoRowCells[6].innerText;
        busBillInfoFormInputs.price.value = busBillInfoRowCells[7].innerText;
    });
});
