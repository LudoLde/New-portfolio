// PAGE HOME
const loadingAppear = document.getElementById("text-principal");
const loadingAppear2 = document.getElementById("second-text");

window.addEventListener("load", () => {
   loadingAppear.classList.add("opacity-transition", "opacity-100");
});
window.addEventListener("load", () => {
   loadingAppear2.classList.add("opacity-transition2", "opacity-100");
});

// PAGE À PROPOS
const loadingAppear3 = document.getElementById("skills");

window.addEventListener("load", () => {
   loadingAppear3.classList.add("opacity-transition", "opacity-100");
});

// PAGE PROJETS
document.addEventListener("DOMContentLoaded", function () {
   const buttons = document.querySelectorAll(".show-details-btn");

   buttons.forEach((button) => {
      button.addEventListener("click", function () {
         const content = this.nextElementSibling;
         content.classList.toggle("hidden");

         const arrowIcon = this.querySelector(".fa-arrow-right");
         const xmarkIcon = this.querySelector(".fa-xmark");

         if (content.classList.contains("hidden")) {
            xmarkIcon.style.display = "none";
            arrowIcon.style.display = "inline-block";
         } else {
            xmarkIcon.style.display = "inline-block"; // ou 'block' selon votre préférence
            arrowIcon.style.display = "none";
         }
      });
   });
});
