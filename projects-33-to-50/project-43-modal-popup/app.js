const btn = document.getElementById('button1')
const btn2 = document.getElementById('button2')
const btn3 = document.getElementById('button3')
const btn4 = document.getElementById('button4')
btn.addEventListener('click', () => openModal("modal1"))
btn2.addEventListener('click', () => openModal("modal2"))
btn3.addEventListener('click', () => closeModal("modal1"))
btn4.addEventListener('click', () => closeModal("modal2"))


const openModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.style.display = 'block'
}

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target === modal1) {
        closeModal("modal1");
    }
    if (event.target === modal2) {
        closeModal("modal2");
    }
}
