const emailValidity = document.getElementById("email-validity");
const emailInput = document.getElementById("email");

// function InvalidMsg(textbox) {
//   if (textbox.validity.typeMismatch) {
//     textbox.setCustomValidity("Please provide a valid email");
//   } else {
//     textbox.setCustomValidity("");
//   }
//   return true;
// }

function InvalidMsg() {
  if (emailInput.validity.typeMismatch) {
    emailValidity.innerHTML = "Please provide a valid email";
  } else {
    emailValidity.innerHTML = "";
  }
  return true;
}

// TODO: lanjut benerin script js nya, - jika email yang diisi tidak valid / sesuai dengan tipe email maka tampilkan paragraf 'email-validity' & icon error tetapi jangan tampilkan pesan 'required' nya, - lalu jika input email nya tidak di isi maka biarkan tampilkan pesan 'required' milik HTML nya.
