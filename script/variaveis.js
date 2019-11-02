let man = `<img class="genero" src="img/man.svg" alt="sexo masculino">`
let woman = `<img class="genero" src="img/woman.svg" alt="sexo feminino">`
let na = `<img class="genero" src="img/na.svg" alt="sexo indefinido">`
const myInit = { method: 'GET', mode: 'cors', cache: 'default' };
const proxPage = document.getElementById("proximo")
const antPage = document.getElementById("anterior")
const body = document.querySelector("#container")



function makeRow(item) {
    return `
    <div class="personagem">
        <div class="nome">${item.name}</div>
        <div class="altura">${calc(item.height, 100)}</div>
        <div class="peso">${item.mass}</div>
        <div class="CabeloCor">${item.hair_color}</div>
        <div class="peleCor">${item.skin_color}</div>
        <div class="olhoCor">${item.eye_color}</div>
        <div class="nasceu">${item.bith_year}</div>
        <div class="sexo">${(item.gender != "n/a")?((item.gender == "male")?man:woman):na}</div>
        <div class="plantNatal">${planetaNat(item.homeworld)}</div>
    </div>
    `
}