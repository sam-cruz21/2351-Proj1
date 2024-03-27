const susFace = document.querySelector(".closed");
const niceFace = document.querySelector(".open");

//add event listener//
susFace.addEventListener("click", () => {
    if(niceFace.classList.contains("open")) {
        niceFace.classList.add("active");
        susFace.classList.remove("active");
    }
} );


niceFace.addEventListener("click", () => {
    if (susFace.classList.contains("closed")) {
        susFace.classList.add("active");
        niceFace.classList.remove ("active");
    }
});