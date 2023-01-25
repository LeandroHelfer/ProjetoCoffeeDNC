/* Modal */
const toggleModal = () => {
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

function openModal() {
    toggleModal();
}

function closeModal() {
    toggleModal();
}

/** Mostrar botão de comprar nos cards ao passar o mouse */
function showButton(selector) {
    if (selector == '#card1') {
        const button = document.querySelector("#button1")
        button.classList.toggle("button-highLight")
    } else if (selector == '#card2') {
        const button = document.querySelector("#button2")
        button.classList.toggle("button-highLight")
    } else if (selector == '#card3') {
        const button = document.querySelector("#button3")
        button.classList.toggle("button-highLight")
    } else if (selector == '#card4') {
        const button = document.querySelector("#button4")
        button.classList.toggle("button-highLight")
    }
}