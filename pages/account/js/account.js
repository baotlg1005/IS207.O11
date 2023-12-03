window.addEventListener("load", LoadAccountInfo);
window.addEventListener("load", CheckLogin);

let accountInfo = {}
let newAccountInfo = {}
let changeInfoNames = []

function LoadAccountInfo() {
  let userId = getCookie("userId");
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let results = JSON.parse(this.responseText);
        accountInfo = results[0];
        LoadInfoView(accountInfo);
        LoadInfoEdit(accountInfo);
      } catch (err) {
        console.log(err);
      }
    }
  };
  xhttp.open(
    "GET",
    "../../server/data-controller/account/get-data.php?action=load-account-info&userId=" +
      userId,
    true
  );
  xhttp.send();
}

function CheckLogin() {
  let userId = getCookie("userId");
  if (userId == "") {
    window.location.href = "../login/index.html";
  }
}

function LoadInfoView(info){
  if(info.Name) document.getElementById("user-name-text").innerHTML = info.Name;
  if(info.Sex) document.getElementById("user-gender-text").innerHTML = info.Sex=="Male"?"Nam":"Nữ";
  if(info.Birthday) document.getElementById("user-bdate-text").innerHTML = ChangeDateType(info.Birthday);
  if(info.Email) document.getElementById("user-email-text").innerHTML = info.Email;
  if(info.Nationality) document.getElementById("user-nation-text").innerHTML = info.Nationality;
  if(info.Phone) document.getElementById("user-phone-text").innerHTML = info.Phone;
  if(info.Nation) document.getElementById("user-ppnation-text").innerHTML = info.Nation;
  if(info.Expiration) document.getElementById("user-ppdate-text").innerHTML = ChangeDateType(info.Expiration);
}
function LoadInfoEdit(info){
  document.getElementById("user-txt-name").value = info.Name;
  document.getElementById("txt-user-gender").value = info.Sex;
  document.getElementById("user-txt-bdate").value = info.Birthday;
  document.getElementById("user-txt-email").value = info.Email;
  document.getElementById("user-txt-nation").value = info.Nationality;
  document.getElementById("user-txt-phone").value = info.Phone;
  document.getElementById("user-txt-ppnation").value = info.Nation;
  document.getElementById("user-txt-ppdate").value = info.Expiration;
}

function ChangeDateType(date){
  let dateArr = date.split("-");
  return dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
}

const viewInfo = document.getElementById("user-info-view");
const editInfo = document.getElementById("user-info-form");
const editBtn = document.getElementById("user-btn-edit");
const saveBtn = document.getElementById("user-btn-save");
const cancelBtn = document.getElementById("user-btn-clear");

editBtn.addEventListener("click", EditAccountInfo);
saveBtn.addEventListener("click", SaveAccountInfo);
cancelBtn.addEventListener("click", CancelEdit);

function EditAccountInfo() {
  viewInfo.classList.add("hide");
  editInfo.classList.remove("hide");
  LoadInfoEdit(accountInfo);
}

function SaveAccountInfo() {
  newAccountInfo = {};
  changeInfoNames = [];
  let isChange = false;

  isChange = SetNewInfo("user-txt-name", "Name");
  isChange |= SetNewInfo("txt-user-gender", "Sex");
  isChange |= SetNewInfo("user-txt-bdate", "Birthday");
  isChange |= SetNewInfo("user-txt-email", "Email");
  isChange |= SetNewInfo("user-txt-nation", "Nationality");
  isChange |= SetNewInfo("user-txt-phone", "Phone");
  isChange |= SetNewInfo("user-txt-ppnation", "Nation");
  isChange |= SetNewInfo("user-txt-ppdate", "Expiration");

  if (!isChange) {
    console.log("Không có gì thay đổi");
    viewInfo.classList.remove("hide");
    editInfo.classList.add("hide");
    return;
  }

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      try {
        if (this.responseText == "success") {
          LoadAccountInfo();
          viewInfo.classList.remove("hide");
          editInfo.classList.add("hide");
        } else {
          alert("Cập nhật thất bại");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  xhttp.open(
    "POST",
    "../../server/data-controller/account/update-data.php",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("action=update-account-info&data=" + JSON.stringify(newAccountInfo) + "&changeInfoNames=" + JSON.stringify(changeInfoNames) + "&userId=" + getCookie("userId"));
}

function SetNewInfo(id, key) {
  let value = document.getElementById(id).value;
  if (value != accountInfo[key]) {
    newAccountInfo[key] = value;
    changeInfoNames.push(key);
    return true;
  }
  return false;
}

function CancelEdit() {
  viewInfo.classList.remove("hide");
  editInfo.classList.add("hide");
}