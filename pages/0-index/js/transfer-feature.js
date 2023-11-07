let haveDriver = false;

const transferContainer = document.getElementById('feature-container__transfer');

const driverToggle = transferContainer.querySelector('.transfer-info__driver-toggle');
const transferInfoFormContainer = document.getElementById('transfer__info-form');

driverToggle.addEventListener('click', (e) => {
    const icon = driverToggle.querySelector('ion-icon');
    haveDriver = !haveDriver;
    if(!haveDriver) icon.setAttribute('name', 'radio-button-off-sharp');
    else icon.setAttribute('name', 'radio-button-on-sharp');
});