const mask = document.querySelector(".mask");
setTimeout(() => {
  mask.classList.add("show");
});
setTimeout(() => {
  mask.classList.replace("show", "display-none");
}, 400);
