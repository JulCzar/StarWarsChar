const myInit = { method: 'GET', mode: 'cors', cache: 'default' };
const proxPage = document.getElementById("proximo")
const antPage = document.getElementById("anterior")
const body = document.querySelector("#container")
const man = `<img class="genero" src="img/man.svg" alt="sexo masculino">`
const woman = `<img class="genero" src="img/woman.svg" alt="sexo feminino">`
const na = `<img class="genero" src="img/na.svg" alt="sexo indefinido">`

let cores = {
    "black": "preto",
    "white": "branco",
    "yellow": "amarelo",
    "golden": "dourado",
    "green": "verde",
    "blonde": "loiro",
    "blue": "azul"
}