const imgs = document.getElementById("imgs");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length() - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

// this is for seamless animation still need fixes

// const imgs = document.getElementById("imgs");
// const leftBtn = document.querySelector("#left");
// const rightBtn = document.querySelector("#right");
// let img = document.querySelectorAll("#imgs img");

// // Clone the first and last images
// const firstImgClone = img[0].cloneNode(true);
// const lastImgClone = img[img.length - 1].cloneNode(true);

// // Append the cloned first image to the end of the container
// imgs.appendChild(firstImgClone);

// // Prepend the cloned last image to the beginning of the container
// imgs.insertBefore(lastImgClone, img[0]);

// img = document.querySelectorAll("#imgs img"); // Update the img NodeList

// let idx = 1; // Start with the cloned image at index 1 (the second image)
// const imgWidth = 500; // Assuming each image is 500px wide

// let interval = setInterval(run, 2000);

// function run() {
//   idx++;

//   imgs.style.transition = "transform 0.5s ease-in-out";
//   imgs.style.transform = `translateX(${-idx * imgWidth}px)`;

//   // If reaching the last cloned image, reset to the first cloned image
//   if (idx >= img.length - 1) {
//     setTimeout(() => {
//       imgs.style.transition = "none";
//       idx = 1;
//       imgs.style.transform = `translateX(${-idx * imgWidth}px)`;
//     }, 500); // A short delay to ensure the transition is complete before resetting
//   }
// }

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 2000);
// }

// leftBtn.addEventListener("click", () => {
//   idx--;
//   changeImage();
//   resetInterval();
// });

// rightBtn.addEventListener("click", () => {
//   idx++;
//   changeImage();
//   resetInterval();
// });
