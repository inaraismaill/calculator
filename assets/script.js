const screen = document.getElementById("screen")

eventListener()

function eventListener() {

    document.addEventListener('click', buttonValue)

}

function buttonValue(value) {

    if (value.target.tagName === "BUTTON") {

        button = value.target.textContent

        if (button === "=") {
            try {
                let y = eval(screen.textContent)
                screen.textContent = y
            }
            catch {
                alert("qeyd etdiyiniz misalda xeta var")
                screen.textContent = ""
            }
        }
        else if (button === "C") {
            screen.textContent = ""
        }
        else (
            screen.textContent += button
        )
    }
}
