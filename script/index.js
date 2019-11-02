(function () {
    api()
})()

function api(atual = 'https://swapi.co/api/people/?format=json') {
    if (typeof atual != `string`) atual = atual.getAttribute(`page`)
    fetch(atual, myInit)
        .then(response => response.json())
        .then(async function (response) {
            const { next, previous } = response
            proxPage.setAttribute("page", next || undefined)
            antPage.setAttribute("page", previous || undefined)
            proxPage.hidden = !next
            antPage.hidden = !previous
            body.innerHTML = ""
            response.results.forEach(async element => {
                body.insertAdjacentHTML('beforeend', await makeRow(element))
            });
        });
}

async function planetaNat(item) {
    item += "?format=json"
    let response = await fetch(item, myInit)
    let data = await response.json()
    return data.name
}

function calc(item, divisor) {
    item /= divisor
    return item
}

async function makeRow(item) {
    const planet = await planetaNat(item.homeworld)
    let altura = (item.height == "unknown")?"desconhecida":(calc(item.height, 100) + "m")
    let peso = (item.mass == "unknown")?"desconhecido":(item.mass + "kg")
    let nascimento = (item.birth_year == "unknown")?"desconhecido":item.birth_year
    return `
    <div class="personagem">
        <div class="nome">${(item.name) + '<span class="sexo">' + ((item.gender != "n/a") ? ((item.gender == "male") ? man : woman) : na) + '</span>' + '<span class="homeland">' + (planet) + "</span>"}</div>
        <div class="altura dados">${altura}</div>
        <div class="peso dados">${peso}</div>
        <div class="CabeloCor dados">${item.hair_color}</div>
        <div class="peleCor dados">${item.skin_color}</div>
        <div class="olhoCor dados">${item.eye_color}</div>
        <div class="nasceu dados">${nascimento}</div>
    </div>
    `
}