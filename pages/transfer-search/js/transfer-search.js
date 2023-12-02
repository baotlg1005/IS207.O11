let transferSearchInfo = {
    location: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    haveDriver: false
}

const featureTransferSearch = document.getElementById('feature__transfer-search')
const transferSearchConfig = featureTransferSearch.querySelector('.transfer-search__config')
const haveDriverCheckbox = transferSearchConfig.querySelector('#config__have-driver-checkbox')

const transferSearchForm = featureTransferSearch.querySelector('#transfer-search__search-form')
const locationInput = transferSearchForm.querySelector('#transfer-search__location')
const startDateInput = transferSearchForm.querySelector('#transfer-search__start-date')
const startHourInput = transferSearchForm.querySelector('#select-hour-start')
const startMinuteInput = transferSearchForm.querySelector('#select-minute-start')
const endDateInput = transferSearchForm.querySelector('#transfer-search__end-date')
const endHourInput = transferSearchForm.querySelector('#select-hour-end')
const endMinuteInput = transferSearchForm.querySelector('#select-minute-end')
const submitBtn = transferSearchForm.querySelector('#search-form__submit-btn--transfer')
window.onload = function (e) {
let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let locations = JSON.parse(this.responseText);
        if (locations.length > 0) {
            locations.forEach(item=>{
                document.getElementById("location").innerHTML += `<option>${item.Location}</option>`
            })
          }
        }
      }
    xhttp.open("POST", "../../server/data-controller/transfer/get-data.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`action=getLocation`)
}
function GetTodayDate() {
    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth() + 1
    const todayYear = today.getFullYear()
    return `${todayYear}-${todayMonth < 10 ? "0" + todayMonth : todayMonth}-${todayDate < 10 ? "0" + todayDate : todayDate}`
}
const todayDate = GetTodayDate()
let date = new Date();
let today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
input_dates = document.querySelectorAll(".date__input");
input_dates.forEach(item=>{item.setAttribute("min", today); item.value = todayDate})

// haveDriverCheckbox EVENT
haveDriverCheckbox.addEventListener('click', () => {
    haveDriverCheckbox.classList.toggle('checked')
    haveDriverCheckbox.classList.toggle('unchecked')
    transferSearchInfo.haveDriver = !transferSearchInfo.haveDriver
})


//submit event
submitBtn.addEventListener('click', () => {
    transferSearchInfo.location = locationInput.value
    startDate = new Date(startDateInput.value)
    if (isNaN(startDate)) {
        alert('Invalid checkin date');
        return;
    }
    transferSearchInfo.startDate = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`;
    transferSearchInfo.startTime = startHourInput.value+":"+startMinuteInput.value
    endDate = new Date(endDateInput.value)
    if (isNaN(endDate)) {
        alert('Invalid checkout date');
        return;
    }
    transferSearchInfo.endDate = `${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
    transferSearchInfo.endTime = endHourInput.value +":"+endMinuteInput.value
    if (!transferSearchInfo.location) {
        alert('Location is required');
        return;
      }

    if (!transferSearchInfo.startTime) {
        alert('Start time is required');
        return;
    }


    if (!transferSearchInfo.endTime) {
        alert('End time is required');
        return;
    }
    if (startDate > endDate) {
        alert('Start date must be before end date');
        return;
    }
    if (startDate == endDate && transferSearchInfo.startTime >= transferSearchInfo.endTime) {
        alert('Start time must be before end time');
        return;
    }
    window.location.href = '../transfer-display/'
    sessionStorage.setItem('transferSearchInfo', JSON.stringify(transferSearchInfo))
})