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
const startTimeInput = transferSearchForm.querySelector('#transfer-search__start-time')
const endDateInput = transferSearchForm.querySelector('#transfer-search__end-date')
const endTimeInput = transferSearchForm.querySelector('#transfer-search__end-time')
const submitBtn = transferSearchForm.querySelector('#search-form__submit-btn--transfer')

// haveDriverCheckbox EVENT
haveDriverCheckbox.addEventListener('click', () => {
    haveDriverCheckbox.classList.toggle('checked')
    haveDriverCheckbox.classList.toggle('unchecked')
    transferSearchInfo.haveDriver = !transferSearchInfo.haveDriver
})


//submit event
submitBtn.addEventListener('click', () => {
    transferSearchInfo.location = locationInput.value
    transferSearchInfo.startDate = startDateInput.value
    transferSearchInfo.startTime = startTimeInput.value
    transferSearchInfo.endDate = endDateInput.value
    transferSearchInfo.endTime = endTimeInput.value
  
    console.log(transferSearchInfo)
})