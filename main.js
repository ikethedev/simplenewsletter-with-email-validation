const dismissBtn = document.querySelector(".dismiss")
const subscribeBtn = document.querySelector(".subscribe")
const emailInput = document.querySelector("#email_input") 


const toggleModal = () => {
    document.querySelector(".success_container").classList.toggle("hide")
}

const validEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailTest = emailRegex.test(emailInput.value)

    if(!emailTest){
        document.querySelector(".error_message").classList.remove("hide")
        document.querySelector("#email_input").classList.add("error")
        document.querySelector("#email_input").placeholder.style.color = "#FF6155"
    } else {
        document.querySelector(".error_message").classList.add("hide")
        document.querySelector("#email_input").classList.remove("error")
        toggleModal()
        emailInput.value = ""
    }
}

subscribeBtn.addEventListener("click", validEmail)
dismissBtn.addEventListener("click", toggleModal)