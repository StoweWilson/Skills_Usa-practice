let hamburger = document.getElementById("hamburger")
let links = document.getElementById("links")

links.addEventListener("click", () => {
    links.classList.toggle("active")
    hamburger.classList.toggle("active")

})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    links.classList.toggle("active")

})