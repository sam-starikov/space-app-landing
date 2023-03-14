const ctx = document.getElementById('myChart')

new Chart(ctx, {
   type: 'line',
   data: {
      labels: ['Mon', 'Thu', 'Wen', 'Thru', 'Fri', 'Sab', 'Sun'],
      datasets: [
         {
            label: 'WorkOut',
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
