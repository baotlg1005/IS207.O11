{/* <div id="feature__hotel-search" class="container-fluid feature__item">
<div class="hotel-search__config config">
    <div class="btn-dropdown guest-and-room-quantity">
        <div class="info guest-and-room-quantity__info">
            <ion-icon class="icon" name="people"></ion-icon>
            <div class="text">
                1 Người lớn, 0 trẻ em, 1 phòng
            </div>
            <ion-icon class="drop-down-icon" name="chevron-down-outline"></ion-icon>
        </div>
        <div class="dropdown-panel dropdown-panel--set-quantity guest-and-room-quantity__dropdown-panel hide">
            <div class="dropdown-panel__title">
                <div class="text">Số hành khách</div>
            </div>
            <div class="dropdown-panel__item" data-passenger-type="adult">
                <ion-icon class="item__icon" name="body-outline"></ion-icon>
                <div class="item__title">
                    <div class="text">Người lớn</div>
                    <div class="comment">(từ 12 tuổi)</div>
                </div>
                <div class="item__set-quantity">
                    <ion-icon class="set-quantity__icon increase" name="add-circle-outline"></ion-icon>
                    <div class="set-quantity__quantity">1</div>
                    <ion-icon class="set-quantity__icon decrease"
                        name="remove-circle-outline"></ion-icon>
                </div>
            </div>
            <div class="dropdown-panel__item" data-passenger-type="child">
                <ion-icon class="item__icon" name="body-outline"></ion-icon>
                <div class="item__title">
                    <div class="text">Trẻ em</div>
                    <div class="comment">(từ 2 - 11 tuổi)</div>
                </div>
                <div class="item__set-quantity">
                    <ion-icon class="set-quantity__icon increase" name="add-circle-outline"></ion-icon>
                    <div class="set-quantity__quantity">0</div>
                    <ion-icon class="set-quantity__icon decrease"
                        name="remove-circle-outline"></ion-icon>
                </div>
            </div>
            <div class="dropdown-panel__item" data-passenger-type="room">
                <ion-icon class="item__icon" name="bed-outline"></ion-icon>
                <div class="item__title">
                    <div class="text">Số phòng</div>
                </div>
                <div class="item__set-quantity">
                    <ion-icon class="set-quantity__icon increase" name="add-circle-outline"></ion-icon>
                    <div class="set-quantity__quantity">1</div>
                    <ion-icon class="set-quantity__icon decrease"
                        name="remove-circle-outline"></ion-icon>
                </div>
            </div>
            <div class="dropdown-panel__confirm-btn">
                <div class="text">Xong</div>
            </div>
        </div>
    </div>
</div>
<form action="" id="hotel-search__search-form" class="search-form">
    <div class="search-form__input-container">
        <div class="input-block">
            <div class="title">
                <div class="text">
                    Thành phố, địa điểm hoặc tên khách sạn
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="location" style="color: #236eff;"></ion-icon>
                <input id="hotel-search__location" class="location__input" type="text"
                    placeholder="Địa điểm" autocomplete="off">
            </div>
        </div>
    </div>

    <div class="search-form__input-container">
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Ngày nhận phòng
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input id="hotel-search__checkin-date" class="checkin-date__input" type="text"
                    placeholder="Ngày nhận phòng" autocomplete="off">
            </div>
        </div>
        <div class="input-block all-connect">
            <div class="title">
                <div class="text">
                    Ngày trả phòng
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input id="hotel-search__checkout-date" class="checkout-date__input" type="text"
                    placeholder="Ngày trả phòng" autocomplete="off">
            </div>
        </div>
        <div id="search-form__submit-btn--hotel" class="btn-submit left-connect">
            <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
</form>
</div> */}

const hotelSearch = {
    location: '',
    checkinDate: '',
    checkoutDate: '',
    adultQuantity: 0,
    childQuantity: 0,
    roomQuantity: 0
}

const featureHotelSearch = document.getElementById('feature__hotel-search');
const hotelConfig = featureHotelSearch.querySelector('.hotel-search__config');
const guestAndRoomQuantity = hotelConfig.querySelector('.guest-and-room-quantity');
const guestAndRoomQuantityInfo = guestAndRoomQuantity.querySelector('.guest-and-room-quantity__info');
const guestAndRoomQuantityDropdownPanel = guestAndRoomQuantity.querySelector('.guest-and-room-quantity__dropdown-panel');
const guestAndRoomQuantityItems = guestAndRoomQuantityDropdownPanel.querySelectorAll('.dropdown-panel__item');
const guestAndRoomQuantityConfirmBtn = guestAndRoomQuantityDropdownPanel.querySelector('.dropdown-panel__confirm-btn');

const hotelSearchForm = featureHotelSearch.querySelector('#hotel-search__search-form');
const locationInput = hotelSearchForm.querySelector('#hotel-search__location');
const checkinDateInput = hotelSearchForm.querySelector('#hotel-search__checkin-date');
const checkoutDateInput = hotelSearchForm.querySelector('#hotel-search__checkout-date');
const submitBtn = hotelSearchForm.querySelector('#search-form__submit-btn--hotel');

//guestAndRoomQuantity EVENT
guestAndRoomQuantityInfo.addEventListener('click', () => {
    guestAndRoomQuantityDropdownPanel.classList.toggle('hide');
});

// click outside to close dropdown panel
document.addEventListener('click', (e) => {
    if (!guestAndRoomQuantity.contains(e.target)) {
        guestAndRoomQuantityDropdownPanel.classList.add('hide');
    }
});

// set quantity
guestAndRoomQuantityItems.forEach(item => {
    console.log(item)
    const setQuantity = item.querySelector('.item__set-quantity');
    const quantity = setQuantity.querySelector('.set-quantity__quantity');
    const increaseBtn = setQuantity.querySelector('.set-quantity__icon.increase');
    const decreaseBtn = setQuantity.querySelector('.set-quantity__icon.decrease');

    increaseBtn.addEventListener('click', () => {
        quantity.innerText = parseInt(quantity.innerText) + 1;
    });

    decreaseBtn.addEventListener('click', () => {
        if (parseInt(quantity.innerText) > 0) {
            quantity.innerText = parseInt(quantity.innerText) - 1;
        }
    });
});

//confirm btn event
guestAndRoomQuantityConfirmBtn.addEventListener('click', () => {
    guestAndRoomQuantityDropdownPanel.classList.add('hide');
    const adultQuantity = guestAndRoomQuantityItems[0].querySelector('.set-quantity__quantity').innerText;
    const childQuantity = guestAndRoomQuantityItems[1].querySelector('.set-quantity__quantity').innerText;
    const roomQuantity = guestAndRoomQuantityItems[2].querySelector('.set-quantity__quantity').innerText;
    guestAndRoomQuantityInfo.querySelector('.text').innerText = `${adultQuantity} Người lớn, ${childQuantity} trẻ em, ${roomQuantity} phòng`;

    hotelSearch.adultQuantity = adultQuantity;
    hotelSearch.childQuantity = childQuantity;
    hotelSearch.roomQuantity = roomQuantity;
});

//submit btn event
submitBtn.addEventListener('click', () => {
    hotelSearch.location = locationInput.value;
    hotelSearch.checkinDate = checkinDateInput.value;
    hotelSearch.checkoutDate = checkoutDateInput.value;
    console.log(hotelSearch);
});