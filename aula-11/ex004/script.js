var act = document.querySelector('input#classif')
act.addEventListener('click', clicar)

function clicar() {
    var naci = document.querySelector('input#txtimi')
    var res = document.querySelector('div#res')

    if (naci.value == 'brasileira') {
        res.innerHTML = 'Bem vindo de volta ao seu país'
    } else {
        res.innerHTML = 'Bem vindo ao nosso país imigrante'
        res.innerHTML += '<br>Boas Férias'
    }
}