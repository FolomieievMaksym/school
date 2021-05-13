window.addEventListener('DOMContentLoaded', () => {
	try {
		// let ibg = document.querySelectorAll('.ibg')
		// ibg.forEach(el => {
		// 	let srcAttr = el.firstElementChild.getAttribute('src');
		// 	el.style.backgroundImage = `url('./${srcAttr}')`
		// })


		let slider = document.querySelector('.slider__body');
		let wrapper = document.querySelector('.slider').offsetWidth;
		let sliderItems = document.querySelectorAll('.slider__item');
		let arrowLeft = document.querySelector('.button-left');
		let arrowRight = document.querySelector('.button-right');
		let dotsParent = document.querySelector('.slider__dots')
		for (let i = 0; i < sliderItems.length; i++) {
			let span = document.createElement('span')
			dotsParent.append(span)
		}
		let dots = document.querySelectorAll('.slider__dots span');
		dots[0].className = 'active'
		let currentSlider = 0;
		slider.style.width = wrapper * sliderItems.length + 'px';

		arrowRight.addEventListener('click', () => {
			if (currentSlider < sliderItems.length - 1) {
				currentSlider++
			} else {
				currentSlider = 0;
			}
			for (let i = 0; i < sliderItems.length; i++) {
				dots[i].className = ''
			}
			dots[currentSlider].className = 'active'
			slider.style.left = -currentSlider * wrapper + 'px';
		})

		arrowLeft.addEventListener('click', () => {
			if (currentSlider != 0) {
				currentSlider--;
			} else {
				currentSlider = sliderItems.length - 1;
			}
			for (let i = 0; i < sliderItems.length; i++) {
				dots[i].className = ''
			}
			dots[currentSlider].className = 'active'
			slider.style.left = -currentSlider * wrapper + 'px';
		})
		dots.forEach((el, i) => {
			el.addEventListener('click', () => {
				for (let i = 0; i < sliderItems.length; i++) {
					dots[i].className = ''
				}
				el.className = 'active'
				currentSlider = i
				slider.style.left = -i * wrapper + 'px'
			})
		})
	} catch (error) {
		console.log(error.stack)
	}
})

