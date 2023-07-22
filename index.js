const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const displayImg = document.querySelector(".display-img");
const imageInput = document.getElementById("imageInput");
const imageGallery = document.getElementById("imageGallery");
const stringArray = [
  "The Earths circumference at the equator is approximately 40,075 kilometers",
  "The Great Wall of China is the longest wall in the world, stretching over 21,196 kilometers",
  "Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs",
  "A group of flamingos is called a 'flamboyance.'",
  "The Eiffel Tower in Paris weighs about 10,100 tons.",
  "Octopuses have three hearts and blue blood.",
  "The average adult human body contains about 206 bones.",
  "A day on Venus is longer than a year on Venus due to its slow rotation.",
  "The world's oldest known recipe is for beer and dates back to 3400 BCE.",
  "Koalas have unique fingerprints, similar to humans.",
  "Jellyfish have been around for more than 500 million years, even before dinosaurs.",
  "Bananas are berries, while strawberries are not.",
  "An ostrich's eye is bigger than its brain.",
  "The shortest war in history lasted only 38 to 45 minutes between Britain and Zanzibar in 1896.",
  "A group of owls is called a 'parliament.'",
  "The Amazon Rainforest produces about 20% of the world's oxygen.",
  "Cleopatra was born closer in time to the first moon landing than to the construction of the Great Pyramid.",
  "Tigers have striped skin, not just striped fur.",
  "The human brain is about 60% fat.",
  "Pineapples were named after pinecones due to their appearance.",
  "A group of crows is called a 'murder.'",
  "The longest time between two twins being born is 87 days.",
  "The Hawaiian alphabet only has 12 letters.",
  "The speed of light in a vacuum is approximately 299,792,458 meters per second.",
  "A day on Mercury lasts about 176 Earth days due to its slow rotation and long orbital period.",
  "The average person will spend about six months of their life waiting for red lights to turn green.",
  "Hippos secrete a reddish oily fluid often mistaken for blood, which acts as a skin moisturizer and sunscreen.",
  "Polar bears' fur is not white; it's translucent, and their skin underneath is black.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "The world's smallest mammal is the bumblebee bat, weighing only about 2 grams."
];
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
          getRandomString();
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
      getRandomString();
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
  });
}
function getRandomString() {
  const randomIndex = Math.floor(Math.random() * stringArray.length);
  const randomString = stringArray[randomIndex];
  document.getElementById("fact").innerText = "Your Fact:--" + randomString;
}
