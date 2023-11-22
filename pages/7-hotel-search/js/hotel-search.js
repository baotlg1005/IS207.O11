let HotelSearchInfo = {
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

    HotelSearchInfo.adultQuantity = adultQuantity;
    HotelSearchInfo.childQuantity = childQuantity;
    HotelSearchInfo.roomQuantity = roomQuantity;
});

//submit btn event
submitBtn.addEventListener('click', () => {
    HotelSearchInfo.location = locationInput.value;
    HotelSearchInfo.checkinDate = checkinDateInput.value;
    HotelSearchInfo.checkoutDate = checkoutDateInput.value;
    console.log(HotelSearchInfo);
});