window.addEventListener("load", LoadAccountInfo);
window.addEventListener("load", CheckLogin);

let accountInfo = {}

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
  document.getElementById("user-name-text").innerHTML = info.Name;
  document.getElementById("user-gender-text").innerHTML = info.Sex=="Male"?"Nam":"Nữ";
  document.getElementById("user-bdate-text").innerHTML = ChangeDateType(info.Birthday);
  document.getElementById("user-email-text").innerHTML = info.Email;
  document.getElementById("user-nation-text").innerHTML = info.Nationality;
  document.getElementById("user-phone-text").innerHTML = info.Phone;
  document.getElementById("user-ppnation-text").innerHTML = info.Nation;
  document.getElementById("user-ppdate-text").innerHTML = ChangeDateType(info.Expiration);
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
}

function CancelEdit() {
  viewInfo.classList.remove("hide");
  editInfo.classList.add("hide");
}