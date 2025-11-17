document.addEventListener("DOMContentLoaded", function() {
    // Verificar se os elementos dos gráficos existem antes de criar
    const barChartElement = document.getElementById('barChart');
    const lineChartElement = document.getElementById('lineChart');
    const pieChartElement = document.getElementById('pieChart');
    const doughnutChartElement = document.getElementById('doughnutChart');
    const radarChartElement = document.getElementById('radarChart');
    const polarChartElement = document.getElementById('polarChart');

    // Gráfico de Barras
    if (barChartElement) {
        const barCtx = barChartElement.getContext('2d');
        const barChart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'Vendas 2025',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Gráfico de Linha
    if (lineChartElement) {
        const lineCtx = lineChartElement.getContext('2d');
        const lineChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'Visitantes 2025',
                    data: [65, 59, 80, 81, 56, 55],
                    fill: false,
                    borderColor: 'rgba(46, 204, 113, 1)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Gráfico de Pizza
    if (pieChartElement) {
        const pieCtx = pieChartElement.getContext('2d');
        const pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Motor', 'Freios', 'Elétrica', 'Suspensão', 'Outros'],
                datasets: [{
                    label: 'Categorias Mais Procuradas',
                    data: [30, 20, 15, 25, 10],
                    backgroundColor: [
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(241, 196, 15, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)'
                    ],
                    borderColor: [
                        'rgba(231, 76, 60, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(241, 196, 15, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(155, 89, 182, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Gráfico de Rosca
    if (doughnutChartElement) {
        const doughnutCtx = doughnutChartElement.getContext('2d');
        const doughnutChart = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Desktop', 'Tablet', 'Mobile', 'Outros'],
                datasets: [{
                    label: 'Tráfego por Dispositivo',
                    data: [35, 15, 45, 5],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(155, 89, 182, 0.7)'
                    ],
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(155, 89, 182, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Gráfico de Radar
    if (radarChartElement) {
        const radarCtx = radarChartElement.getContext('2d');
        const radarChart = new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['Velocidade', 'Potência', 'Agilidade', 'Controle', 'Eficiência', 'Durabilidade'],
                datasets: [{
                    label: 'CG 125 Bolinha',
                    data: [65, 59, 90, 81, 56, 55],
                    fill: true,
                    backgroundColor: 'rgba(155, 89, 182, 0.2)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    pointBackgroundColor: 'rgba(155, 89, 182, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(155, 89, 182, 1)'
                }, {
                    label: 'CG 125 Titan',
                    data: [75, 70, 80, 85, 65, 70],
                    fill: true,
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            }
        });
    }

    // Gráfico de Área Polar
    if (polarChartElement) {
        const polarCtx = polarChartElement.getContext('2d');
        const polarChart = new Chart(polarCtx, {
            type: 'polarArea',
            data: {
                labels: ['Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'],
                datasets: [{
                    label: 'Popularidade por Região',
                    data: [40, 25, 20, 10, 5],
                    backgroundColor: [
                        'rgba(26, 188, 156, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(231, 76, 60, 0.7)'
                    ],
                    borderColor: [
                        'rgba(26, 188, 156, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(155, 89, 182, 1)',
                        'rgba(231, 76, 60, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
