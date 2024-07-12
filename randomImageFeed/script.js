const container = document.querySelector(".container");
//this unplash api is no more access like this it require now auth token
const unsplashURL = "https://source.unsplash.com/random/";

const imgUrls = [
  "https://images.pexels.com/photos/19640282/pexels-photo-19640282/free-photo-of-woman-riding-a-horse-along-the-beach.jpeg",
  "https://images.pexels.com/photos/20144251/pexels-photo-20144251/free-photo-of-motor-scooter-near-booth-in-city.jpeg",
  "https://images.pexels.com/photos/27063864/pexels-photo-27063864/free-photo-of-a-room-with-a-window-and-paintings-on-the-wall.jpeg",
  "https://images.pexels.com/photos/19513039/pexels-photo-19513039/free-photo-of-motorcycles-and-car-on-city-street.jpeg",
  "https://images.pexels.com/photos/25740946/pexels-photo-25740946/free-photo-of-a-bowl-of-limes-on-a-table-with-a-cloth.jpeg",
  "https://images.pexels.com/photos/26986595/pexels-photo-26986595/free-photo-of-juliette-stewart-press-photo-5-cr-brandon-keys.png",
  "https://images.pexels.com/photos/4450407/pexels-photo-4450407.jpeg",
  "https://images.pexels.com/photos/21728570/pexels-photo-21728570/free-photo-of-brunette-woman-in-yellow-dress-jumping-in-garden.jpeg",
  "https://images.pexels.com/photos/26690666/pexels-photo-26690666/free-photo-of-a-reindeer-grazing-on-the-snow-in-the-mountains.jpeg",
  "https://images.pexels.com/photos/15096340/pexels-photo-15096340/free-photo-of-road-in-empty-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const rows = 3;
const imagesPerRow = Math.ceil(imgUrls.length / rows);
let rowDiv;

imgUrls.forEach((imgUrl, index) => {
  if (index % imagesPerRow === 0) {
    rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    container.appendChild(rowDiv);
  }

  const img = document.createElement("img");
  img.src = imgUrl;
  rowDiv.appendChild(img);
});
container.appendChild(rowDiv);

// const rows = 3;

// for (let i = 0; i < rows * 3; i++) {
//   const img = document.createElement("img");
//   img.src = `${unsplashURL}${getRandomSize()}`;
//   container.appendChild(img);
// }

// function getRandomSize() {
//   return `${getRandomNr()}x${getRandomNr()}`;
// }

// function getRandomNr() {
//   return Math.floor(Math.random() * 10) + 300;
// }
