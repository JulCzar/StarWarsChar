const myInit = { method: 'GET', mode: 'cors', cache: 'default' };
const proxPage = document.getElementById("proximo")
const antPage = document.getElementById("anterior")
const body = document.querySelector("#container")
let man = `<img class="genero" src="img/man.svg" alt="sexo masculino">`
let woman = `<img class="genero" src="img/woman.svg" alt="sexo feminino">`
let na = `<img class="genero" src="img/na.svg" alt="sexo indefinido">`

let cores = {
    "black": "preto",
    "white": "branco",
    "yellow": "amarelo",
    "golden": "dourado",
    "green": "verde",
    "blonde": "loiro",
    "blue": "azul"
}