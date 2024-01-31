const codes = document.querySelectorAll(".code");
const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");

//for dark mode (extra feature)
toggle.addEventListener("click", (e) => {
  codes[0].focus();
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

codes[0].focus();
codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = "";
      setTimeout(() => codes[index + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      codes[index - 1] = 0;
      setTimeout(() => codes[index - 1].focus(), 10);
    }
  });
});
