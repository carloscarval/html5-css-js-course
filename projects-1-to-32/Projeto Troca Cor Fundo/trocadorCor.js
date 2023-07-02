

function trocarCorFundo() {
    let colors = ['red, green', 'blue', 'yellow', 'purple', 'pink', 'black', 'white']
    let chosenColor = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[chosenColor]
}
