const userPane = document.querySelector("#user-pane");
const billPane = document.querySelector("#bill-pane");
const buttons = document.querySelectorAll(".nav-tab");

function navigateTab(e) {
    if (e.currentTarget.id === "btn-account-user") {
        userPane.classList.remove("hide");
        billPane.classList.add("hide");
    } 
    else if (e.currentTarget.id === "btn-account-bill"){
        billPane.classList.remove("hide");
        userPane.classList.add("hide");
    }
    else if (e.currentTarget.id === "btn-account-logout") {
        //clear cookies and redirect to login page
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "../main/";
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", navigateTab);
});

window.addEventListener("load", CheckNav);

function CheckNav() {
    //get nav value from url
    const urlParams = new URLSearchParams(window.location.search);
    const nav = urlParams.get("nav");
    if (nav === "bill-pane") {
        billPane.classList.remove("hide");
        userPane.classList.add("hide");
    }
    else {
        userPane.classList.remove("hide");
        billPane.classList.add("hide");
    }
}
