const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


let path = "./data/image.png";

const button4 = document.getElementById("btn4");
const button32 = document.getElementById("btn32");
const button256 = document.getElementById("btn256");

button4.addEventListener("click", () => {
  path = "./data/4x4.json";
  updateJSONCanvas(path);
});

button32.addEventListener("click", () => {
  path = "./data/32x32.json";
  updateJSONCanvas(path);
});

button256.addEventListener("click", () => {
  path = "./data/image.png";
  updateImageCanvas(path);
});

function updateImageCanvas(path) {
  let img = new Image();
  img.src = path;
  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
}
