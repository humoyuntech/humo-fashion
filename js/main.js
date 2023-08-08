/* ========== Navigation =========== */
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    navList.classList.add("show");
})

close.addEventListener ("click", () => {
    navList.classList.remove("show");
})



/* ========== User Form =========== */
