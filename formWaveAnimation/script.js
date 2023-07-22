const labels = document.querySelectorAll(".form-control label");

// split in array
// convert each split into individual span array 
// then again join them

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("") 
    .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
});
