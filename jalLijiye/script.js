const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

//function to check click in cups
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

//function that fills all the cup before that index (add full class)
const highlightCups = (idx) => {
  // this is for if we twice click any cup then it will make it empty (like toggling the last cup till filled)
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
};

//get total small full glasses
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  const totalCups = smallCups.length;

  //remove percentage number if cups are empty
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  //to fix remaining div even after complete filled
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${totalCups / 4 - (250 * fullCups) / 1000}L`;
  }
}
