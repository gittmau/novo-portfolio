//Menu mobile

var btn = document.querySelector('#menuHamb')
var btn2 = document.querySelector('#btnFechar')
var blocoMenu = document.querySelector('.nav-ul')

function mostrarMenu() {	
	
	blocoMenu.style.transform = 'translateX(0%)'
	blocoMenu.style.opacity = '1'	
	blocoMenu.style.transition = '1s'
	btn.style.visibility = 'hidden'
	btn2.style.visibility = 'visible'
}

function esconderMenu(){
    
    blocoMenu.style.transform = 'translateX(-100%)'
    blocoMenu.style.opacity = '0'	
	blocoMenu.style.transition = '1s'
	btn.style.visibility = 'visible'
	btn2.style.visibility = 'hidden'

}


btn.addEventListener('click', mostrarMenu)
btn2.addEventListener('click', esconderMenu)