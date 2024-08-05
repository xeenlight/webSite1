function codeCountry() {
    let country = document.getElementById("countryS").value;
    let phone = document.getElementById("phone");

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
function CalcCurse() {
    let courseSelect = document.getElementById("courseSelect");
    let discountRange = document.getElementById("discountRange");
    let discountValue = document.getElementById("discountValue");
    let sumValue = document.getElementById("sumValue");

    let course = courseSelect.value;
    let Frontend_Price = 14000000;
    let Python_Price = 12000000;
    let DATA_Price = 16000000;

    let price;

    if (course === "none") {
        price = 0;
    } else if (course === "Frontend") {
        price = Frontend_Price;
    } else if (course === "Python") {
        price = Python_Price;
    } else if (course === "DATA") {
        price = DATA_Price;
    }

    let discount = parseInt(discountRange.value);
    let finalPrice = price - (price * (discount / 100));

    sumValue.value = finalPrice.toLocaleString(); 

    discountValue.textContent = `${discount}%`;
}
document.getElementById("courseSelect").addEventListener("change", CalcCurse);
document.getElementById("discountRange").addEventListener("input", CalcCurse);