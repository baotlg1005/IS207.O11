data = {
    // 6 items in ad-data
    "ad-data": [
        {
            "id": 0,
            "name": "Đà Lạt",
            "thumbImageUrl": "pages/0-index/image/ad-image/da-lat.png",
            "accommodations": "4.7 triệu",
            "hotelRoom": "13.798 phòng",
            "FlightUrl": "",
            "HotelUrl": "",
        },
        {
            "id": 1,
            "name": "Đà Nẵng",
            "thumbImageUrl": "pages/0-index/image/ad-image/da-nang.png",
            "accommodations": "3.2 triệu",
            "hotelRoom": "9.456 phòng",
            "FlightUrl": "",
            "HotelUrl": "",
        },
        {
            "id": 2,
            "name": "Hồ Chí Minh",
            "thumbImageUrl": "pages/0-index/image/ad-image/hcm.png",
            "accommodations": "5.1 triệu",
            "hotelRoom": "7.891 phòng",
            "FlightUrl": "",
            "HotelUrl": "",
        },
        {
            "id": 3,
            "name": "SAPA",
            "thumbImageUrl": "pages/0-index/image/ad-image/sapa.png",
            "accommodations": "2.8 triệu",
            "hotelRoom": "12.345 phòng",
            "FlightUrl": "",
            "HotelUrl": "",
        },
        {
            "id": 4,
            "name": "Hà Nội",
            "thumbImageUrl": "pages/0-index/image/ad-image/ha-noi.png",
            "accommodations": "3.9 triệu",
            "hotelRoom": "5.678 phòng",
            "FlightUrl": "",
            "HotelUrl": "",
        },
        {
            "id": 5,
            "name": "Vũng Tàu",
            "thumbImageUrl": "pages/0-index/image/ad-image/vung-tau.png",
            "accommodations": "6.2 triệu",
            "hotelRoom": "8.765 phòng",
            "FlightUrl": "",
            "HotelUrl": "",
        }
    ]
}

// load ad card item
const locationAdCardItemContainer = document.querySelector('.location-ad-card-container__item-container');
const locationAdCardItemTemplate = locationAdCardItemContainer.querySelector('.item-container__item.template');

function CreateAdCardContainer(data) {
    const newAdCardItem = locationAdCardItemTemplate.cloneNode(true);
    newAdCardItem.classList.remove('template');
    newAdCardItem.classList.remove('hide');
    newAdCardItem.dataset.id = data.id;
    newAdCardItem.querySelector('.item__image-background').src = data.thumbImageUrl;
    newAdCardItem.querySelector('.information__name .text').textContent = data.name;
    newAdCardItem.querySelector('.information__description .text').textContent = data.accommodations + " lượt du khách";
    return newAdCardItem;
}

function CreateAdCardContainers(data) {
    data.forEach(item => {
        locationAdCardItemContainer.appendChild(CreateAdCardContainer(item));
    });
}

CreateAdCardContainers(data["ad-data"]);


//load ad slider
const locationAdSliderContainer = document.querySelector('.location-ad-slider-container__slider-container .slider-container__slider');
const locationAdSliderTemplate = locationAdSliderContainer.querySelector('.slider__item.template');

function CreateAdSlider(data) {
    const newAdSlider = locationAdSliderTemplate.cloneNode(true);
    newAdSlider.classList.remove('template');
    newAdSlider.classList.remove('hide');
    newAdSlider.dataset.id = data.id;
    newAdSlider.querySelector('.item__image-background').src = data.thumbImageUrl;
    newAdSlider.querySelector('.information__name .text').textContent = data.name;
    newAdSlider.querySelector('.information__description .text').textContent = data.accommodations + " lượt du khách";
    return newAdSlider;
}

function CreateAdSliders(data) {
    data.forEach(item => {
        locationAdSliderContainer.appendChild(CreateAdSlider(item));
    });
}

CreateAdSliders(data["ad-data"]);

//ad slider event
const navLeftBtn = document.querySelector('.location-ad-slider-container__slider-container .slider-container__nav .nav__left');
const navRightBtn = document.querySelector('.location-ad-slider-container__slider-container .slider-container__nav .nav__right');

const sliderScroll = 120 * 2.7;

navLeftBtn.addEventListener('click', function(e) {
    // locationAdSliderContainer.scrollLeft -= sliderScroll;
    locationAdSliderContainer.scroll({
        left: locationAdSliderContainer.scrollLeft - sliderScroll,
        behavior: 'smooth'
    });
});
navRightBtn.addEventListener('click', function(e) {
    // locationAdSliderContainer.scrollLeft += sliderScroll;
    locationAdSliderContainer.scroll({
        left: locationAdSliderContainer.scrollLeft + sliderScroll,
        behavior: 'smooth'
    });
});