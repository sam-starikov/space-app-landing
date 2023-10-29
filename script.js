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
