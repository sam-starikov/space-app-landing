/* Burger */
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')

function toggleBurger() {
	burger.addEventListener('click', function () {
		burger.classList.toggle('active')
		menu.classList.toggle('active')
		document.body.classList.toggle('lock')
	})
}

toggleBurger()

/* Chart.js */
const ctx = document.getElementById('myChart')

new Chart(ctx, {
	type: 'line',
	data: {
		labels: [
			'2016',
			'2017',
			'2018',
			'2019',
			'2020',
			'2021',
			'2022',
			'2023',
			'2024',
		],
		datasets: [
			{
				label: 'SpaceApp',
				data: [9, 13, 1, 3, 7, 2, 6, 7, 4, 8, 0],
				borderWidth: 1,
				backgroundColor: ['#e01e2e'],
				borderColor: ['#e01e2e'],
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
})

/* Swiper.js */
const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 2000,
	},

	centeredSlides: true,
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
