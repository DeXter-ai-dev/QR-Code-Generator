let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
const darkModeToggle = document.getElementById("darkModeToggle");
const alertPopup = document.getElementById("alertPopup");

function generateQR() {
  // Check if the input is empty or only whitespace
  if (qrText.value.trim() === "") {
    showAlert("Please enter a URL or text!");
    return;
  }
  // Encode the text to handle special characters
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
  imgBox.classList.add("show-img");
}

function downloadQR() {
  if (qrImage.src === "") {
    showAlert("Please generate a QR code first!");
    return;
  }
  // Create a temporary link element for download
  let link = document.createElement('a');
  link.href = qrImage.src;
  link.download = "qr-code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function showAlert(message) {
  alertPopup.textContent = message;
  alertPopup.classList.add("show");
  setTimeout(function(){
    alertPopup.classList.remove("show");
  }, 2000);
}

// Toggle dark mode and animate the toggle icon
darkModeToggle.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    darkModeToggle.style.transform = "rotate(180deg)";
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.transform = "rotate(0deg)";
  }
});