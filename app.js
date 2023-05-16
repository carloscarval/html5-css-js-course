
function perguntarNome() {
    let nome = prompt("Qual seu nome?")
    let sobrenome = prompt("Qual seu sobrenome?")
    let idade = parseInt(prompt("Qual sua idade?"))
    const ajusteIdade = 2
    
    let idadeCorrigida = idade + ajusteIdade;
    
    document.getElementById("substitute").innerHTML = nome + " tem "+ idadeCorrigida + " anos";
    
}


function perguntarTemperaturaCelsius() {
    let celsius = parseFloat(prompt("Qual a temperatura em Celsius?"))
    
    let fahrenheit = celsius * 1.8 + 32
    
    alert("A temperatura em fahrenheit é: " + fahrenheit.toFixed(2))
}


function perguntarNotaAluno() {
    let notaAluno = parseFloat(prompt("Qual sua nota?"))
    let notaAlunoLetra = ""

    if (notaAluno >= 90 && notaAluno <= 100) {
        notaAlunoLetra = "A"
    } else if (notaAluno >= 80) {
        notaAlunoLetra = "B"
    } else if (notaAluno >= 70) {
        notaAlunoLetra = "C"
    } else if (notaAluno >= 60) {
        notaAlunoLetra = "D"
    } else if(notaAluno < 60 && notaAluno >= 0) {
        notaAlunoLetra = "F"
    } else {
        alert("Nota inválida")
        perguntarNotaAluno()
        return
    }
    
    alert("Sua nota é: " + notaAlunoLetra)
}

const listaUsuariosAceitos = [["Carlos", 123], ["João", 456], ["Maria", 789]]

function validarCredenciais() {
    let usuarioInputado = document.getElementById("nome").value
    let senhaInputada = document.getElementById("senha").value
    if (usuarioInputado === "" || senhaInputada === "") {
        alert("Preencha todos os campos")
        return
    } else {
        if (listaUsuariosAceitos.some(usuario => usuario[0] === usuarioInputado && usuario[1] === parseInt(senhaInputada))) {
            alert("Bem vindo " + usuarioInputado)
        } else {
            alert("Usuário ou senha inválidos")
        }
    }
}

function calcularSomaDoisNumeros(numero1, numero2) {
    let soma = numero1 + numero2

    document.getElementById("resultado").innerHTML = soma
}


function gerarListaNumeros() {
    const listaNumeros = ""
    for (i = 1; i <= 20; i++) {
        let linha = document.createElement("li")
        linha.innerHTML = "Item " + i
        linha.id = i
        document.getElementById("listaNumeros").appendChild(linha)
    }
}

function removerTodosItensLista() {
    document.getElementById("listaNumeros").innerHTML = ""
}

function removerElementoEspecificoLista() {
    let elemento = document.getElementById("elementoARemover").value
    if (document.getElementById(elemento)) {
        document.getElementById("listaNumeros").removeChild(document.getElementById(elemento))
    } else {
        alert("Elemento não encontrado")
    }
}