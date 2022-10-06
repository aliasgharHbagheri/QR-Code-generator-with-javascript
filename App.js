const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // If the input is empty then return from here
  generateBtn.innerHTML = "Generating QR Code...";
  // getting a QR Code of user-entered value using the qrserver
  // API and passing the API returned img src to qrImg
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => { // once the QR code image loaded
    wrapper.classList.toggle("active");
    generateBtn.innerHTML = "Generate QR Code";
  });

});

qrInput.addEventListener("keyup",()=>{   // When the user input is empty
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})


