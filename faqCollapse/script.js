const buttons = document.querySelectorAll(".faq_toggle");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //this access parent Node of that button class add class active in it
    button.parentNode.classList.toggle("active");
  });
});
