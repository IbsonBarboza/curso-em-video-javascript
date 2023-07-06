function clicar() {
    var speed = document.querySelector('input#txtvel')
    var show = document.querySelector('div#res')

    if (speed.value > 50) {
        show.innerHTML = `VOCÊ FOI MULTADO! Diminua a sua velocidade!`
        show.innerHTML += `<br>Dirija com cuidado e sempre use o cinto de segurança`
    } else {
        show.innerHTML = `Dirija com cuidado e sempre use o cinto de segurança`
    }
}
