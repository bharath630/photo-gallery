const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const body = document.body;
const displayImg = document.querySelector(".display-img");
const imageInput = document.getElementById("imageInput");
const imageGallery = document.getElementById("imageGallery");
add();
function add() {
  imageInput.addEventListener("change", function () {
    imageGallery.innerHTML = "";
    for (const file of imageInput.files) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.alt = "Uploaded Image";
        const firstImage = slider.querySelector("img");
        slider.insertBefore(imgElement, firstImage);
        imgElement.addEventListener("click", function () {
          images.forEach((img) => {
            img.style.display = "none";
          });
          displayImg.src = this.src;
          displayImg.style.display = "block";
        });
      };
      reader.readAsDataURL(file);
    }
  });
}
display();
function display() {
  images.forEach((img) => {
    img.addEventListener("click", function () {
      images.forEach((img) => {
        img.style.display = "none";
      });
      displayImg.src = this.src;
      displayImg.style.display = "block";
    });
  });
}
restore();
function restore() {
  displayImg.addEventListener("click", function () {
    displayImg.style.display = "none";
    images.forEach((img) => {
      img.style.display = "block";
    });
    display();
    body.classList.remove("hide-scrollbar");
  });
}
