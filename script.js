/*Abrir menu*/


let btnMenu = document.getElementById('menu')

function abrirMenu(){

	btnMenu.style.transform = 'translateX(0%)'
	btnMenu.style.transition = '1.5s'
}

function fecharMenu(){

	btnMenu.style.transform = 'translateX(-100%)'
	btnMenu.style.transition = '1.5s'
}





function validar(){

	if(formulario.inputNome.value ==""){

		alert('Preencha o campo nome')
		
		return false
	}

	if(formulario.inputEmail.value ==""){

		alert('Preencha o campo E-mail')
		
		return false
	}

	if(formulario.fone.value ==""){

		alert('Preencha o campo telefone')
		return false

	}else{alert('Obrigado por preencher nosso formulário')
               return true}
} 


//Animação Scroll



const elementos = document.querySelectorAll('[data-anima]') //Armazena todos os elementos data
const animacaoClass = 'animacao' //Classe criada para resetar o css das classes

function animaScroll(){

	const topoPagina=window.pageYOffset+((window.innerHeight*3)/4) // 3/4 da altura da janela window 

	elementos.forEach(function(elemento){

		if(topoPagina > elemento.offsetTop){

			elemento.classList.add(animacaoClass)

		}else{elemento.classList.remove(animacaoClass)}
	})
}


if(elementos.length){
    window.addEventListener('scroll',function(){
    	animaScroll()
    })
}





/*Obter a posição do scroll*/


let texto = document.querySelector('.content-work')

let posicao = texto.getBoundingClientRect()

console.log(posicao)

