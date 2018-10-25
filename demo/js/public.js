window.addEventListener("load", () => {
  const mask = document.querySelector(".mask");
  mask.classList.add("show");
  setTimeout(() => {
    mask.classList.replace("show", "display-none");
  }, 400);
});
