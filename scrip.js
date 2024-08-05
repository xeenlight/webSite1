function codeCountry() {
    const country = document.getElementById("countryS").value;
    const phone = document.getElementById("phone");

    if (country === "none") {
        phone.value = "Выберите страну";
    } else if (country === "uz") {
        phone.value = "+998";
    } else if (country === "ru") {
        phone.value = "+7";
    } else if (country === "usa") {
        phone.value = "+1";
    }
}
function toggleSubmitButton() {
    const checkbox = document.getElementById("dataConsent");
    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = !checkbox.checked;
}