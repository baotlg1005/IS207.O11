const userInfoForm = document.getElementById("user-info-form");
const userInfoFormInputs = {
    action: userInfoForm.querySelector("#user-txt-action"),
    id: userInfoForm.querySelector("#user-txt-id"),
    name: userInfoForm.querySelector("#user-txt-name"),
    gender: userInfoForm.querySelector("#user-txt-gender"),
    bdate: userInfoForm.querySelector("#user-txt-bdate"),
    email: userInfoForm.querySelector("#user-txt-email"),
    nation: userInfoForm.querySelector("#user-txt-nation"),
    phone: userInfoForm.querySelector("#user-txt-phone"),
    ppnation: userInfoForm.querySelector("#user-txt-ppnation"),
    ppdate: userInfoForm.querySelector("#user-txt-ppdate")
};
const userSubmitBtn = document.getElementById("user-btn-save");
const userClearBtn = document.getElementById("user-btn-clear");

const userTable = document.getElementById("user-table");
const userInfoModifyButtons =
    userTable.querySelectorAll(".table-btn-modify");
const userInfoDeleteButtons =
    userTable.querySelectorAll(".table-btn-delete");

userInfoModifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const userInfoRow = button.closest("tr");
        const userInfoRowCells = userInfoRow.querySelectorAll("td");
        console.log(userInfoRowCells);

        const odlIdOption = userInfoFormInputs.id.querySelector('option.old-id');
        odlIdOption.classList.remove("hide");
        odlIdOption.innerText = userInfoRowCells[0].innerText;
        odlIdOption.value = userInfoRowCells[0].innerText;
        odlIdOption.selected = true;


        if (userInfoRowCells[2].innerText == "Nam") {
            userInfoFormInputs.gender.selectedIndex = 0;
        } else if (userInfoRowCells[2].innerText == "Nữ") {
            userInfoFormInputs.gender.selectedIndex = 1;
        } else {
            userInfoFormInputs.gender.selectedIndex = 0;
        }

        userInfoFormInputs.bdate.value = ChangeTextToDate(
            userInfoRowCells[3].innerText
        );

        userInfoFormInputs.ppdate.value = ChangeTextToDate(
            userInfoRowCells[8].innerText
        );

        userInfoFormInputs.name.value = userInfoRowCells[1].innerText;
        userInfoFormInputs.email.value = userInfoRowCells[4].innerText;
        userInfoFormInputs.nation.value = userInfoRowCells[5].innerText;
        userInfoFormInputs.phone.value = userInfoRowCells[6].innerText;
        userInfoFormInputs.ppnation.value = userInfoRowCells[7].innerText;

        userInfoFormInputs.action.value = "update";

        if (CheckAllInputFilled(userInfoFormInputs)) {
            userSubmitBtn.disabled = false;
        }
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


function CheckAllInputFilled(inputs) {
    //input is a object
    for (const input in inputs) {
        if (inputs[input].value == "") {
            return false;
        }
    }
    return true;
}

for (const key in userInfoFormInputs) {
    userInfoFormInputs[key].addEventListener("input", (e) => {
        if (CheckAllInputFilled(userInfoFormInputs)) {
            userSubmitBtn.disabled = false;
        } else {
            userSubmitBtn.disabled = true;
        }
    });
}

userClearBtn.addEventListener("click", (e) => {
    userSubmitBtn.disabled = true;
    userInfoFormInputs.action.value = "create";

    const odlIdOption = userInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.add("hide");
    odlIdOption.selected = false;
});
