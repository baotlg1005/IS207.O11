{/* <div id="feature__flight-search" class="container-fluid">
<div class="flight-search__config">
    <div class="config__flight-type" data-flight-type="one">
        <div class="btn-toggle active" data-flight-type="one">
            <div class="text">
                Một chiều / Khứ hồi
            </div>
        </div>
        <div class="btn-toggle" data-flight-type="many">
            <div class="text">
                Nhiều thành phố
            </div>
        </div>
    </div>
    <div class="config__ticket-info">
        <div class="btn-dropdown ticket-info__passenger-quantity">
            <div class="info passenger-quantity__info">
                <ion-icon class="icon" name="people"></ion-icon>
                <div class="text">
                    1 Người lớn, 0 trẻ em, 0 em bé
                </div>
                <ion-icon class="drop-down-icon" name="chevron-down-outline"></ion-icon>
            </div>
            <div class="dropdown-panel dropdown-panel--set-quantity passenger-quantity__dropdown-panel hide">
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
                        <div class="set-quantity__quantity">1</div>
                        <ion-icon class="set-quantity__icon decrease"
                            name="remove-circle-outline"></ion-icon>
                    </div>
                </div>
                <div class="dropdown-panel__item" data-passenger-type="baby">
                    <ion-icon class="item__icon" name="body-outline"></ion-icon>
                    <div class="item__title">
                        <div class="text">Em bé</div>
                        <div class="comment">(dưới 2 tuổi)</div>
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
        <div class="btn-dropdown ticket-info__seat-type" data-seat-type="economy">
            <div class="info seat-type__info">
                <ion-icon name="star"></ion-icon>
                <div class="text">
                    Phổ thông
                </div>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>

            <div class="dropdown-panel seat-type__dropdown-panel hide">
                <div class="dropdown-panel__item selected" data-ticket-type="economy">
                    <ion-icon name="ellipse" class="selected"></ion-icon>
                    <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                    <div class="text">
                        Phổ thông
                    </div>
                </div>
                <div class="dropdown-panel__item" data-ticket-type="business">
                    <ion-icon name="ellipse" class="selected"></ion-icon>
                    <ion-icon name="ellipse-outline" class="unselected"></ion-icon>
                    <div class="text">
                        Thương gia
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<form action="" id="flight-search__search-form--one" class="search-form">
    <div class="search-form__input-container">
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Từ
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__departure" 
                    class="departure__input" 
                    type="text"
                    placeholder="Điểm đi" 
                    autocomplete="off"
                >
            </div>
        </div>
        <div class="input-block left-connect">
            <div class="title">
                <div class="text">
                    Đến
                </div>
            </div>
            <div class="input">
                <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__destination" 
                    class="destination__input" 
                    type="text"
                    placeholder="Điểm đến" 
                    autocomplete="off"
                >
            </div>
        </div>
    </div>
    <div class="search-form__input-container">
        <div class="input-block right-connect">
            <div class="title">
                <div class="text">
                    Ngày đi
                </div> 
            </div>
            <div class="input">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__departure-date" 
                    class="departure-date__input" 
                    type="date" 
                    placeholder="Ngày đi"
                >
            </div>
        </div>
        <div class="input-block left-connect">
            <div class="title">
                <input 
                    id="flight-search__have-return" 
                    type="checkbox" 
                >
                <div class="text">
                    Khứ hồi
                </div>
            </div>
            <div class="input disabled">
                <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                <input 
                    id="flight-search__return-date" 
                    class="return-date__input" 
                    type="date"
                    placeholder="Ngày về"
                >
            </div>
        </div>
    </div>
    <div class="search-form__btn-container">
        <div id="search-form__submit-btn--one-flight" class="btn-submit">
            <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
    
</form>
<form action="" id="flight-search__search-form--many" class="search-form search-form--many">
    <div class="flight-info-container">
        <div class="search-form__input-container">
            <div class="input-block right-connect">
                <div class="title">
                    <div class="text">
                        Từ
                    </div>
                </div>
                <div class="input">
                    <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                    <input 
                        id="flight-search__departure--" 
                        class="departure__input" 
                        type="text"
                        placeholder="Điểm đi" 
                        autocomplete="off"
                    >
                </div>
            </div>
            <div class="input-block left-connect">
                <div class="title">
                    <div class="text">
                        Đến
                    </div>
                </div>
                <div class="input">
                    <ion-icon class="icon" name="airplane" style="color: #236eff;"></ion-icon>
                    <input 
                        id="flight-search__destination--" 
                        class="destination__input" 
                        type="text"
                        placeholder="Điểm đến" 
                        autocomplete="off"
                    >
                </div>
            </div>
        </div>
        <div class="search-form__input-container">
            <div class="input-block">
                <div class="title">
                    <div class="text">
                        Ngày đi
                    </div> 
                </div>
                <div class="input">
                    <ion-icon class="icon" name="calendar" style="color: #236eff;"></ion-icon>
                    <input 
                        id="flight-search__departure-date--" 
                        class="departure-date__input" 
                        type="date" 
                        placeholder="Ngày đi"
                    >
                </div>
            </div>
        </div>
        <div class="search-form__remove-btn">
            <ion-icon name="close-circle-outline"></ion-icon>
        </div>
    </div>
    <div class="search-form__btn-group">
        <div id="search-form__add-more-btn" class="btn-default btn-add-more">
            <ion-icon name="add-circle-outline"></ion-icon>
            <div class="text">
                Thêm chuyến bay khác
            </div>
        </div>
        <div id="search-form__submit-btn--many-flight" class="btn-submit">
            <ion-icon name="search-outline"></ion-icon>
            <div class="text">
                Tìm chuyến bay
            </div>
        </div>
    </div>
</form>
</div> */}

let searchInfo = {
    flightType: "one",
    passengerQuantity: {
        adult: 1,
        child: 0,
        baby: 0
    },
    seatType: "economy",
    oneFlightInfo: {
        departure: "",
        destination: "",
        departureDate: "",
        haveReturn: false,
        returnDate: ""
    },
    manyFlightInfo: [
        {
            departure: "",
            destination: "",
            departureDate: ""
        }
    ],
}



//#endregion