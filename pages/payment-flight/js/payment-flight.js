let selectedFlight;

if (sessionStorage.getItem("selectedFlight")) {
    selectedFlight = JSON.parse(sessionStorage.getItem("selectedFlight"));
    console.log(selectedFlight);
}
