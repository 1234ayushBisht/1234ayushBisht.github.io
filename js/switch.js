let home = document.getElementById("home-screen")
let about = document.getElementById("about-screen")
let work = document.getElementById("work-screen")
let contact = document.getElementById("contact-screen")

let home_btn = document.getElementById("home-nav-btn")
let about_btn = document.getElementById("about-nav-btn")
let work_btn = document.getElementById("work-nav-btn")
let contact_btn = document.getElementById("contact-nav-btn")
let action_btn = document.getElementById("action-btn")

window.addEventListener("load", () => navigate("home"))

home_btn.addEventListener("click", () => navigate("home"))
about_btn.addEventListener("click", () => navigate("about"))
work_btn.addEventListener("click", () => navigate("work"))
contact_btn.addEventListener("click", () => navigate("contact"))

action_btn.addEventListener("click", () => navigate("contact"))

function navigate(screen) {
    if (screen == "home") {
        home.style.display = "block"
        about.style.display = "none"
        work.style.display = "none"
        contact.style.display = "none"
    }
    else if (screen == "about") {
        home.style.display = "none"
        about.style.display = "block"
        work.style.display = "none"
        contact.style.display = "none"
    }
    else if (screen == "work") {
        home.style.display = "none"
        about.style.display = "none"
        work.style.display = "block"
        contact.style.display = "none"
    }
    else if (screen == "contact") {
        home.style.display = "none"
        about.style.display = "none"
        work.style.display = "none"
        contact.style.display = "block"
    }
}