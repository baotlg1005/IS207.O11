const userPane = document.querySelector("#user-pane");
const flightPane = document.querySelector("#flight-pane");
const carPane = document.querySelector("#car-pane");
const busPane = document.querySelector("#bus-pane");
const hotelPane = document.querySelector("#hotel-pane");
const billPane = document.querySelector("#bill-pane");
const buttons = document.querySelectorAll(".nav-pill");

function navigateTab(e) {
    if (e.currentTarget.id === "btn-admin-user") {
        userPane.classList.remove("hide");
        flightPane.classList.add("hide");
        carPane.classList.add("hide");
        busPane.classList.add("hide");
        hotelPane.classList.add("hide");
        billPane.classList.add("hide");
    } 
    else if (e.currentTarget.id === "btn-admin-flight"){
        flightPane.classList.remove("hide");
        userPane.classList.add("hide");
        carPane.classList.add("hide");
        busPane.classList.add("hide");
        hotelPane.classList.add("hide");
        billPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-admin-car") {
        carPane.classList.remove("hide");
        flightPane.classList.add("hide");
        userPane.classList.add("hide");
        busPane.classList.add("hide");
        hotelPane.classList.add("hide");
        billPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-admin-bus") {
        busPane.classList.remove("hide");
        flightPane.classList.add("hide");
        userPane.classList.add("hide");
        carPane.classList.add("hide");
        hotelPane.classList.add("hide");
        billPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-admin-hotel") {
        busPane.classList.add("hide");
        flightPane.classList.add("hide");
        userPane.classList.add("hide");
        carPane.classList.add("hide");
        hotelPane.classList.remove("hide");
        billPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-admin-bill") {
        busPane.classList.add("hide");
        flightPane.classList.add("hide");
        userPane.classList.add("hide");
        carPane.classList.add("hide");
        hotelPane.classList.add("hide");
        billPane.classList.remove("hide");
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", navigateTab);
});