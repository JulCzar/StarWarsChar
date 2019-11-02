(function() {
    api()
})()



function api(atual = 'https://swapi.co/api/people/?format=json') {
    if (typeof atual != `string`) atual = atual.getAttribute(`page`)
    fetch(atual, myInit)
        .then(response => response.json())
        .then(function(response) {
            const { next, previous } = response
            proxPage.setAttribute("page", next || undefined)
            antPage.setAttribute("page", previous || undefined)
            proxPage.hidden = !next
            antPage.hidden = !previous
            body.innerHTML = ""
            response.results.forEach(element => {
                body.insertAdjacentHTML('beforeend', makeRow(element))
            });
        });
}

async function planetaNat(item) {
    item += "?format=json"
    const response = await fetch(item, myInit).json()
    return response.name
}

function calc(item, divisor) {
    item /= divisor
    return item + "m"
}