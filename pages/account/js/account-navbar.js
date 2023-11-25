const userPane = document.querySelector("#user-pane");
const cartPane = document.querySelector("#cart-pane");
const billPane = document.querySelector("#bill-pane");
const buttons = document.querySelectorAll(".nav-tab");

function navigateTab(e) {
    if (e.currentTarget.id === "btn-account-user") {
        userPane.classList.remove("hide");
        cartPane.classList.add("hide");
        billPane.classList.add("hide");
    } 
    else if (e.currentTarget.id === "btn-account-cart"){
        cartPane.classList.remove("hide");
        userPane.classList.add("hide");
        billPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-account-bill"){
        billPane.classList.remove("hide");
        cartPane.classList.add("hide");
        userPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-account-logout") {

    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", navigateTab);
});