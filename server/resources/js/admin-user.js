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
    ppdate: userInfoForm.querySelector("#user-txt-ppdate"),
    ppid: userInfoForm.querySelector("#user-txt-ppid")
};
const userSubmitBtn = document.getElementById("user-btn-save");
const userClearBtn = document.getElementById("user-btn-clear");

const userTable = document.getElementById("user-table");
const userInfoModifyButtons =
    userTable.querySelectorAll(".table-btn-modify");
const userInfoDeleteButtons =
    userTable.querySelectorAll(".table-btn-delete");

userDataTable.on('click', 'tbody tr', (e) => {
    let classList = e.currentTarget.classList;
    const userInfoRow = e.currentTarget.closest("tr");


    if (classList.contains('selected')) {
        classList.remove('selected');
    }
    else {
        userDataTable.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
        classList.add('selected');
        console.log(userInfoRow);
        getInfoFromRow(userInfoRow);
    }
});

function getInfoFromRow(userInfoRow){
    const userInfoRowCells = userInfoRow.querySelectorAll("td");
    console.log(userInfoRowCells);

    const odlIdOption = userInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.remove("hide");
    odlIdOption.innerText = userInfoRowCells[0].innerText;
    odlIdOption.value = userInfoRowCells[0].innerText;
    odlIdOption.selected = true;

    const ppodlIdOption = userInfoFormInputs.ppid.querySelector('option.old-id');
    ppodlIdOption.classList.remove("hide");
    ppodlIdOption.innerText = userInfoRowCells[7].innerText;
    ppodlIdOption.value = userInfoRowCells[7].innerText;
    ppodlIdOption.selected = true;
    


    if (userInfoRowCells[2].innerText == "Nam") {
        userInfoFormInputs.gender.selectedIndex = 0;
    } else if (userInfoRowCells[2].innerText == "Nữ") {
        userInfoFormInputs.gender.selectedIndex = 1;
    } else {
        userInfoFormInputs.gender.selectedIndex = 0;
    }

    userInfoFormInputs.bdate.value = ChangeDateToObject(
        userInfoRowCells[3].innerText
    );

    userInfoFormInputs.ppdate.value = ChangeDateToObject(
        userInfoRowCells[9].innerText
    );  

    userInfoFormInputs.name.value = userInfoRowCells[1].innerText;
    userInfoFormInputs.email.value = userInfoRowCells[4].innerText;
    userInfoFormInputs.nation.value = userInfoRowCells[5].innerText;
    userInfoFormInputs.phone.value = userInfoRowCells[6].innerText;
    userInfoFormInputs.ppnation.value = userInfoRowCells[8].innerText;

    userInfoFormInputs.action.value = "update";

    // if (CheckAllInputFilled(userInfoFormInputs)) {
    //     userSubmitBtn.disabled = false;
    // }
  }
  


// userInfoModifyButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         const userInfoRow = button.closest("tr");
//         const userInfoRowCells = userInfoRow.querySelectorAll("td");
//         console.log(userInfoRowCells);

//         const odlIdOption = userInfoFormInputs.id.querySelector('option.old-id');
//         odlIdOption.classList.remove("hide");
//         odlIdOption.innerText = userInfoRowCells[0].innerText;
//         odlIdOption.value = userInfoRowCells[0].innerText;
//         odlIdOption.selected = true;


//         if (userInfoRowCells[2].innerText == "Nam") {
//             userInfoFormInputs.gender.selectedIndex = 0;
//         } else if (userInfoRowCells[2].innerText == "Nữ") {
//             userInfoFormInputs.gender.selectedIndex = 1;
//         } else {
//             userInfoFormInputs.gender.selectedIndex = 0;
//         }

//         userInfoFormInputs.bdate.value = ChangeTextToDate(
//             userInfoRowCells[3].innerText
//         );

//         userInfoFormInputs.ppdate.value = ChangeTextToDate(
//             userInfoRowCells[8].innerText
//         );

//         userInfoFormInputs.name.value = userInfoRowCells[1].innerText;
//         userInfoFormInputs.email.value = userInfoRowCells[4].innerText;
//         userInfoFormInputs.nation.value = userInfoRowCells[5].innerText;
//         userInfoFormInputs.phone.value = userInfoRowCells[6].innerText;
//         userInfoFormInputs.ppnation.value = userInfoRowCells[7].innerText;

//         userInfoFormInputs.action.value = "update";

//         if (CheckAllInputFilled(userInfoFormInputs)) {
//             userSubmitBtn.disabled = false;
//         }
//     });
// });

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

function ChangeDateToObject(date) {
    if (date == "") {
        return "";
    }
    //get day, month, year from date = '2024-11-30'
    let day = date.split("-")[2];
    let month = date.split("-")[1] - 1;
    let year = date.split("-")[0];    
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


// function CheckAllInputFilled(inputs) {
//     //input is a object
//     for (const input in inputs) {
//         if (inputs[input].value == "") {
//             return false;
//         }
//     }
//     return true;
// }

// for (const key in userInfoFormInputs) {
//     userInfoFormInputs[key].addEventListener("input", (e) => {
//         if (CheckAllInputFilled(userInfoFormInputs)) {
//             userSubmitBtn.disabled = false;
//         } else {
//             userSubmitBtn.disabled = true;
//         }
//     });
// }

userClearBtn.addEventListener("click", (e) => {
    userSubmitBtn.disabled = true;
    userInfoFormInputs.action.value = "create";

    const odlIdOption = userInfoFormInputs.id.querySelector('option.old-id');
    odlIdOption.classList.add("hide");
    odlIdOption.selected = false;

    const ppodlIdOption = userInfoFormInputs.ppid.querySelector('option.old-id');
    ppodlIdOption.classList.add("hide");
    ppodlIdOption.selected = false;
});
