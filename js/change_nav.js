let nav = document.getElementById("navbar");
let navlist = document.getElementById("navList")
let navright = document.getElementById("navRight")

window.addEventListener("load", change_nav)
window.addEventListener("scroll", change_nav)

function change_nav() {
    if (scrollY > 30) {
        nav.style.background = "white"
        navlist.style.filter = "invert()"
        navright.style.filter = "invert()"
        nav.style.borderBottom = "3px solid black"
    } else {
        nav.style.background = "navy"
        nav.style.borderBottom = "none"
        navlist.style.filter = "none"
        navright.style.filter = "none"
    }
}