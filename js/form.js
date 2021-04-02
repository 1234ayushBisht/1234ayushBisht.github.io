let form = document.getElementById("contact-form")

let name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let text = document.getElementById("text")

const appID = "803f59ifjafjfalf#22"

form.addEventListener("submit", e => {
    e.preventDefault()
    let data = {
        appID: appID,
        name: name.value,
        email: email.value,
        phone: phone.value,
        text: text.value
    }

    fetch("https://tusharcontactform.herokuapp.com/",
        {
            // mode: "no-cors",
            method: "POST",
            body: JSON.stringify(data)
        }
    )
        .then(res => res.json())
        .then(data => {
            name.value = ""
            email.value = ""
            phone.value = ""
            text.value = ""
            alert("Form is submitted")
        })
})
