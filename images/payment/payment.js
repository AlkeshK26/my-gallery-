document.getElementById("buyButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const selectedPaymentMethod = document.getElementById("paymentMethod").value;

    if (selectedPaymentMethod !== "") {
        alert(`You have successfully bought this image\nPayment Method: ${selectedPaymentMethod}\nAmount:  RS 25`);
    } else {
        alert("Please select a payment method.");
    }
});