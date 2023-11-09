{/* <div id="feature__transfer-search" class="container-fluid feature__item">
<div class="transfer-search__config config">
    <div id="config__have-driver-checkbox" class="">
        <ion-icon class="unchecked" name="ellipse-outline"></ion-icon>
        <ion-icon class="checked" name="ellipse"></ion-icon>
        <div class="text">
            Có tài xế
        </div>
    </div>
</div>
<form action="" id="transfer-search__search-form" class="search-form">
    <div class="search-form__input-container">
        <!-- Địa điểm thuê xe của bạn / Ngày bắt đầu / Giờ bắt đầu / Ngày kết thúc / Giờ kết thúc -->
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Địa điểm thuê xe của bạn
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="location" style="color: #236eff;"></ion-icon>
                <input id="transfer-search__location" class="location__input" type="text"
                    placeholder="Địa điểm" autocomplete="off">
            </div>
        </div>
        <div class="input-block all-connect">
            <div class="title">
                <div class="text">
                    Ngày bắt đầu
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input id="transfer-search__start-date" class="start-date__input" type="text"
                    placeholder="Ngày bắt đầu" autocomplete="off">
            </div>
        </div>
        <div class="input-block all-connect">
            <div class="title">
                <div class="text">
                    Giờ bắt đầu
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="time" style="color: #236eff;"></ion-icon>
                <input id="transfer-search__start-time" class="start-time__input" type="text"
                    placeholder="Giờ bắt đầu" autocomplete="off">
            </div>
        </div>
        <div class="input-block all-connect">
            <div class="title">
                <div class="text">
                    Ngày kết thúc
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input id="transfer-search__end-date" class="end-date__input" type="text"
                    placeholder="Ngày kết thúc" autocomplete="off">
            </div>
        </div>
        <div class="input-block all-connect">
            <div class="title">
                <div class="text">
                    Giờ kết thúc
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="time" style="color: #236eff;"></ion-icon>
                <input id="transfer-search__end-time" class="end-time__input" type="text"
                    placeholder="Giờ kết thúc" autocomplete="off">
            </div>
        </div>
        <div id="search-form__submit-btn--transfer" class="btn-submit left-connect">
            <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
</form>
</div> */}

const transferSearch = {
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
    transferSearch.haveDriver = !transferSearch.haveDriver
})


//submit event
submitBtn.addEventListener('click', () => {
    transferSearch.location = locationInput.value
    transferSearch.startDate = startDateInput.value
    transferSearch.startTime = startTimeInput.value
    transferSearch.endDate = endDateInput.value
    transferSearch.endTime = endTimeInput.value
  
    console.log(transferSearch)
})