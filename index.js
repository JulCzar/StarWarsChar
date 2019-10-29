const myInit = { method: 'GET', mode: 'cors', cache: 'default' };

(function() {
    api()
})()

var proxLink, antLink, body = document.querySelector("#local")

function api(atual = 'https://swapi.co/api/people/?format=json') {
    fetch(atual, myInit)
        .then(response => response.json())
        .then(function(response) {
            proxLink = response.next
            antLink = response.previous
            document.getElementById("anterior").hidden = (antLink == null) ? true : false
            document.getElementById("proximo").hidden = (proxLink == null) ? true : false
            body.innerHTML = ""
            response.results.forEach(element => {
                body.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${element.name}</td>
                <td>${element.height}</td>
                <td>${element.mass}</td>
                <td>${element.hair_color}</td>
                <td>${element.skin_color}</td>
                <td>${element.eye_color}</td>
                <td class="ultima">${element.birth_year}</td>
            </tr>`)
            });
        });
}

function proximo() {
    atual = proxLink
    fetch(proxLink, myInit)
        .then(response => response.json())
        .then(function(response) {
            proxLink = response.next
            antLink = response.previous
            api(atual)
        });
}

function anterior() {
    atual = antLink
    fetch(antLink, myInit)
        .then(response => response.json())
        .then(function(response) {
            proxLink = response.next
            antLink = response.previous
            api(atual)
        });
}