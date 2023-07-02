const imagens = [
    ["images/image_1.jpg", "Imagem com quatro cafés em cima de uma tábua de madeira"],
    ["images/image_2.jpg", "3 maracujás, sendo que um está cortado ao meio"],
    ["images/image_3.jpg", "Carro branco em uma estrada com um homem dirigindo"]
]

let button = document.getElementById("button")
let imagem = document.getElementById("imagem")

button.addEventListener('click', trocarImagem)

let indice = 1
function trocarImagem() {
    imagem.src = imagens[indice][0]
    imagem.alt = imagens[indice][1]
    indice++
    if (indice == 3) {
        indice = 0
    }
}