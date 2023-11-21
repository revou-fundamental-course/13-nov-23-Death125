var img = document.getElementById("img");

var slides = [
  "assets/Amerika.png",
  "assets/China.png",
  "assets/Japan.png",
  "assets/Korea.png",
];

var Start = 0;

function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider, 2000);

function validateForm() {
  const name = document.forms["form-input"]["name-input"].value;
  const email = document.forms["form-input"]["email-input"].value;
  const option = document.forms["form-input"]["select-input"].value;

  if (name == "") {
    document.getElementById("error-name").innerHTML = "Name cannot be empty";
    document.getElementById("error-name").style.color = "crimson";
  } else {
    clearField();
  }

  if (email == "") {
    document.getElementById("error-email").innerHTML = "Email cannot be empty";
    document.getElementById("error-email").style.color = "crimson";
  } else {
    clearField();
  }

  if (option == "") {
    document.getElementById("error-select").innerHTML = "You must select one";
  } else {
    clearField();
  }

  return false;
}

function clearField() {
  document.getElementById("error-name").innerHTML = "";
  document.getElementById("error-email").innerHTML = "";
  document.getElementById("error-select").innerHTML = "Select option";
}
