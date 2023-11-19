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
setInterval(slider, 1500);
