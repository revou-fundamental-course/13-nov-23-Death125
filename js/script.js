var img = document.getElementById("img");

var images = [
  "assets/Bali.png",
  "assets/Japan.png",
  "assets/Singapore.png",
  "assets/Bandung.png",
  "assets/Surabaya.png",
  "assets/Amerika.png",
];

var startImage = 0;

function slider() {
  if (startImage < images.length) {
    startImage = startImage + 1;
  } else {
    startImage = 1;
  }

  img.innerHTML = "<img src=" + images[startImage - 1] + ">";
}
setInterval(slider, 2000);

function validateForm() {
  const name = document.forms["form-input"]["name-input"].value;
  const email = document.forms["form-input"]["email-input"].value;
  const option = document.forms["form-input"]["select-input"].value;

  if (name == "" || email == "" || option == "") {
    if (name == "") {
      document.getElementById("error-name").innerHTML = "Name cannot be empty";
      document.getElementById("error-name").style.color = "crimson";
    } else {
      document.getElementById("error-name").innerHTML = "";
    }

    if (email == "") {
      document.getElementById("error-email").innerHTML =
        "Email cannot be empty";
      document.getElementById("error-email").style.color = "crimson";
    } else {
      document.getElementById("error-email").innerHTML = "";
    }

    if (option == "") {
      document.getElementById("error-select").innerHTML =
        "Selection cannot be empty";
      document.getElementById("error-select").style.color = "crimson";
    } else {
      document.getElementById("error-select").innerHTML = "";
      document.getElementById("default-select").innerHTML = "Select Option";
    }

    return false;
  } else {
    clearField();
    alert("Terima kasih sudah berlangganan kepada kami 😁");
  }
}

function clearField() {
  document.getElementById("error-name").innerHTML = "";
  document.getElementById("error-email").innerHTML;
  document.getElementById("error-select").innerHTML = "";
  document.getElementById("default-select").innerHTML = "Select Option";
}
