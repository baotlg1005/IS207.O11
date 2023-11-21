const hotelBillInfoForm = document.getElementById("hotelbill-info-form");
const hotelBillInfoFormInputs = {
    billid: hotelBillInfoForm.querySelector("#hotelbill-txt-billid"),
    roomid: hotelBillInfoForm.querySelector("#hotelbill-txt-roomid"),
    hotelid: hotelBillInfoForm.querySelector("#hotelbill-txt-hotelid"),
    userid: hotelBillInfoForm.querySelector("#hotelbill-txt-userid"),
    username: hotelBillInfoForm.querySelector("#hotelbill-txt-username"),
    checkin: hotelBillInfoForm.querySelector("#hotelbill-txt-checkin"),
    checkout: hotelBillInfoForm.querySelector("#hotelbill-txt-checkout"),
    price: hotelBillInfoForm.querySelector("#hotelbill-txt-price"),
    status: hotelBillInfoForm.querySelector("#hotelbill-txt-status"),
};
const hotelBillSubmitBtn = document.getElementById("hotelbill-btn-save");

const hotelBillTable = document.getElementById("hotelbill-table");
const hotelBillInfoModifyButtons =
    hotelBillTable.querySelectorAll(".table-btn-modify");
const hotelBillInfoDeleteButtons =
    hotelBillTable.querySelectorAll(".table-btn-delete");

hotelBillInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const hotelBillInfoRow = button.closest("tr");
        const hotelBillInfoRowCells = hotelBillInfoRow.querySelectorAll("td");
        console.log(hotelBillInfoRow);

        if (hotelBillInfoRowCells[8].innerText == "Chưa thanh toán") {
            hotelBillInfoFormInputs.status.selectedIndex = 0;
        } else if (hotelBillInfoRowCells[8].innerText == "Đã thanh toán") {
            hotelBillInfoFormInputs.status.selectedIndex = 1;
        } else {
            hotelBillInfoFormInputs.status.selectedIndex = 0;
        }

        hotelBillInfoFormInputs.checkin.value = ChangeTextToDate(
            hotelBillInfoRowCells[5].innerText
        );

        hotelBillInfoFormInputs.checkout.value = ChangeTextToDate(
            hotelBillInfoRowCells[6].innerText
        );

        hotelBillInfoFormInputs.billid.value = hotelBillInfoRowCells[0].innerText;
        hotelBillInfoFormInputs.roomid.value = hotelBillInfoRowCells[1].innerText;
        hotelBillInfoFormInputs.hotelid.value = hotelBillInfoRowCells[2].innerText;
        hotelBillInfoFormInputs.userid.value = hotelBillInfoRowCells[3].innerText;
        hotelBillInfoFormInputs.username.value = hotelBillInfoRowCells[4].innerText;
        hotelBillInfoFormInputs.price.value = hotelBillInfoRowCells[7].innerText;
    });
});


//Thứ 5, 9 thg 11 2023 -> 2023-11-09
function ChangeTextToDate(text) {
    if (text == "") {
        return "";
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

    return [year, month, day].join("-");
}


