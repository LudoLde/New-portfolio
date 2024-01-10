const loadingAppear = document.getElementById("text-principal");
const loadingAppear2 = document.getElementById("second-text");

window.addEventListener("load", () => {
   loadingAppear.classList.add("opacity-transition", "opacity-100");
});
window.addEventListener("load", () => {
   loadingAppear2.classList.add("opacity-transition2", "opacity-100");
});
