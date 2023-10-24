function calculateButton() {
    let errorMessage = "Please Enter a Valid Input";

    let billAmount = parseInt(document.getElementById("billAmount").value);
    let percentageTip = parseInt(document.getElementById("percentageTip").value);
    if (document.getElementById("billAmount").value === "") {
        document.getElementById("errorMessage").textContent = errorMessage;
        document.getElementById("tipAmount").value = "";
        document.getElementById("totalAmount").value = "";
    } else if (document.getElementById("percentageTip").value === "") {
        document.getElementById("errorMessage").textContent = errorMessage;
        document.getElementById("tipAmount").value = "";
        document.getElementById("totalAmount").value = "";
    } else if ((document.getElementById("percentageTip").value === "") & (document.getElementById("billAmount").value === "")) {
        document.getElementById("errorMessage").textContent = errorMessage;
        document.getElementById("tipAmount").value = "";
        document.getElementById("totalAmount").value = "";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let calculatedTip = (percentageTip / 100) * billAmount;
        document.getElementById("tipAmount").value = calculatedTip;
        let totalAmount = billAmount + calculatedTip;
        document.getElementById("totalAmount").value = totalAmount;
    }
}