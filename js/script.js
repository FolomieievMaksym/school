//Header
const body = document.querySelector('body');
const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');
const links = document.querySelectorAll('.menu__list li a');
const who = document.querySelector('#who');
const presentation = document.querySelector('#presentation');
const program = document.querySelector('#program');
const price = document.querySelector('#price');
// let who_y = who.getBoundingClientRect().y;

let program_y = program.getBoundingClientRect().y;
let price_y = price.getBoundingClientRect().y;
burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
	body.classList.toggle('lock')
})

links.forEach(el => {
	el.addEventListener('click', (e) => {
		if (burger.classList.contains('active')) {
			burger.classList.remove('active')
			menu.classList.remove('active')
			body.classList.remove('lock')
		}
		e.preventDefault()
		_scrollTo()
	})
})

links.forEach(el => {
	el.addEventListener('click', _scrollTo)
})


function _scrollTo() {
	let id = this.getAttribute('href');
	let element = document.querySelector(id)
	let position = element.getBoundingClientRect().top
	if (document.documentElement.clientWidth <= 767) {
		position += pageYOffset - 70;
		window.scrollTo(0, position)
	}
	else {
		window.scrollTo(0, position)
	}
}

//Main
const arrowUp = document.querySelector('.up-arrow');
window.addEventListener('scroll', getScrollY)

function getScrollY() {
	if (window.scrollY >= 280) {
		arrowUp.classList.add('visible')
		// window.removeEventListener('scroll', getScrollY)
	}
	else {
		arrowUp.classList.remove('visible')
	}
}

arrowUp.addEventListener('click', () => {
	window.scrollTo(0, 0)
})

//Main-3
const rows = document.querySelectorAll('.program__row');
const lines = document.querySelectorAll('.program__line');
lines.forEach(el => {
	el.addEventListener('click', () => {
		if (el.closest('.program__row').classList.contains('clicked')) el.closest('.program__row').classList.remove('clicked')
		else {
			rows.forEach(el => {
				el.classList.remove('clicked')
			})
			el.closest('.program__row').classList.toggle('clicked')
		}
	})
})
