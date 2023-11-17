const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

// you can use by that too
// loveMe.addEventListener("dblclick", (e) => {
//   console.log("clicked");
// });
let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //getting x and y of cursor
  const x = e.clientX;
  const y = e.clientY;
  // set x y realtive to image not view port
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const YInside = y - topOffset;

  heart.style.top = `${YInside}px`;
  heart.style.left = `${xInside}px`;
  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  //to remove heart because just dissapper but not removed
  setTimeout(() => heart.remove(), 1000);
};
