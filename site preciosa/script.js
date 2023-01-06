//Menu mobile

var hamburgerBtn = document.getElementById('navbar')

var fecharBtn = document.getElementById('btnFechar')

var menuBtn = document.getElementById('menu')

var menuFechar = document.getElementById('menu')

function abrirMenu() {

    menuBtn.style.transform = 'translateX(0%)'

    menuBtn.style.transition = '1s'

    fecharBtn.style.visibility = 'visible'

    hamburgerBtn.style.visibility = 'hidden'
}


function fecharMenu() {

    menuFechar.style.transform = 'translateX(100%)'

    menuFechar.style.transition = '2s'

    hamburgerBtn.style.visibility = 'visible'

    fecharBtn.style.visibility = 'hidden'

}

function carregar(){
    
alert(" Bem vindo ao nosso site!!! "  + new Date)
     
}
