const myInit = { method: 'GET', mode: 'cors', cache: 'default' };

fetch('https://swapi.co/api/people/?format=json', myInit)
.then(response => response.json())
.then(function (response) {
    let body = document.querySelector("#local")
    response.results.forEach(element => {
        body.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${element.name}</td>
            <td>${element.height}</td>
            <td>${element.mass}</td>
            <td>${element.hair_color}</td>
            <td>${element.skin_color}</td>
            <td>${element.eye_color}</td>
            <td>${element.birth_year}</td>
        </tr>
        `)
    });
});