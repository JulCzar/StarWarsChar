const myInit = { method: 'GET', mode: 'cors', cache: 'default' };
const proxPage = document.getElementById("proximo")
const antPage = document.getElementById("anterior")
const body = document.querySelector("#local")



function makeRow(element) {
    let row = '<tr>'
    Object.values(element).forEach((item, key) => { 
        if (key < 8) row += `<td>${item}</td>`
    })
    row += '</tr>'
    return row
}