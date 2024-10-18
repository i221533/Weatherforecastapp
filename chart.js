function updateCharts(data) {
    const labels = data.list.slice(0, 5).map(item => new Date(item.dt_txt).toLocaleDateString());
    const temps = data.list.slice(0, 5).map(item => item.main.temp);

    // Vertical Bar Chart with custom color scheme
    new Chart(document.getElementById('tempBarChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temps,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutBounce'
            }
        }
    });

    // Doughnut Chart with new animations
    new Chart(document.getElementById('weatherDoughnutChart'), {
        type: 'doughnut',
        data: {
            labels: ['Clear', 'Cloudy', 'Rainy'],
            datasets: [{
                data: [3, 1, 1],  // Example data
                backgroundColor: ['rgba(255, 205, 86, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)']
            }]
        },
        options: {
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    // Line Chart for temperature changes
    new Chart(document.getElementById('tempLineChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature Change',
                data: temps,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeOutBounce'
            }
        }
    });
}
