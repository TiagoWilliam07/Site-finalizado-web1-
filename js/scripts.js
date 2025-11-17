// Scripts para a demonstração de Chart.js

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar as abas de código
    initCodeTabs();
    
    // Inicializar todos os gráficos
    initBarChart();
    initLineChart();
    initPieChart();
    initDoughnutChart();
    initRadarChart();
    initPolarChart();
});

// Função para inicializar as abas de código
function initCodeTabs() {
    const codeTabs = document.querySelectorAll('.code-tab');
    
    codeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover classe ativa de todas as abas no mesmo grupo
            const parentTabs = this.parentElement.querySelectorAll('.code-tab');
            parentTabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe ativa à aba clicada
            this.classList.add('active');
            
            // Mostrar conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            const tabContents = this.parentElement.parentElement.querySelectorAll('.tab-content');
            
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}

// Função para gerar cores aleatórias
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
}

// Função para gerar array de cores aleatórias
function getRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}

// Função para gerar dados aleatórios
function getRandomData(count, min = 0, max = 100) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

// Inicializar Gráfico de Barras (Modelagem de Banco de Dados)
function initBarChart() {
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barData = {
        labels: ['Atividade 1 (6.0/10.0)', 'Atividade 2 (0.0/10.0)', 'Faltas (0/44)'],
        datasets: [{
            label: 'Modelagem de Banco de Dados',
            data: [6.0, 0.0, 0],
            backgroundColor: ['rgba(46, 204, 113, 0.7)', 'rgba(231, 76, 60, 0.7)', 'rgba(52, 152, 219, 0.7)'],
            borderColor: ['rgba(46, 204, 113, 1)', 'rgba(231, 76, 60, 1)', 'rgba(52, 152, 219, 1)'],
            borderWidth: 1
        }]
    };
    
    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    };
    
    const barChart = new Chart(barCtx, barConfig);
    document.getElementById('randomizeBarChart').style.display = 'none';
    document.getElementById('toggleBarOrientation').addEventListener('click', function() {
        barChart.config.type = barChart.config.type === 'bar' ? 'horizontalBar' : 'bar';
        barChart.update();
    });
}

// Inicializar Gráfico de Linha (Engenharia de Software)
function initLineChart() {
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineData = {
        labels: ['Atividade 1', 'Atividade 2'],
        datasets: [{
            label: 'Notas (Máx. 10.0)',
            data: [7.0, 0.0],
            fill: false,
            borderColor: 'rgba(46, 204, 113, 1)',
            tension: 0.1
        }]
    };
    
    const lineConfig = {
        type: 'line',
        data: lineData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    };
    
    const lineChart = new Chart(lineCtx, lineConfig);
    document.getElementById('randomizeLineChart').style.display = 'none';
    document.getElementById('toggleLineFill').style.display = 'none';
}

// Inicializar Gráfico de Pizza (Sistemas Operacionais e Redes)
function initPieChart() {
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const totalAulas = 40;
    const faltas = 5;
    const presencas = totalAulas - faltas;
    const pieData = {
        labels: ['Presenças (35)', 'Faltas (5)'],
        datasets: [{
            label: 'Faltas (5 de 40 aulas)',
            data: [presencas, faltas],
            backgroundColor: ['rgba(46, 204, 113, 0.7)', 'rgba(231, 76, 60, 0.7)'],
            borderColor: ['rgba(46, 204, 113, 1)', 'rgba(231, 76, 60, 1)'],
            borderWidth: 1
        }]
    };
    
    const pieConfig = {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };
    
    const pieChart = new Chart(pieCtx, pieConfig);
    document.getElementById('randomizePieChart').style.display = 'none';
}

// Inicializar Gráfico de Rosca (Desenvolvimento Web 1)
function initDoughnutChart() {
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    const notaAtividade1 = 3.0;
    const notaAtividade2 = 0.0;
    const maximo = 20.0;
    const totalObtido = notaAtividade1 + notaAtividade2;
    const restante = maximo - totalObtido;
    const doughnutData = {
        labels: ['Nota Obtida (3.0)', 'Pontos Restantes (17.0)'],
        datasets: [{
            label: 'Notas (3.0 de 20.0)',
            data: [totalObtido, restante],
            backgroundColor: ['rgba(52, 152, 219, 0.7)', 'rgba(189, 195, 199, 0.7)'],
            borderColor: ['rgba(52, 152, 219, 1)', 'rgba(189, 195, 199, 1)'],
            borderWidth: 1
        }]
    };
    
    const doughnutConfig = {
        type: 'doughnut',
        data: doughnutData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%'
        }
    };
    
    const doughnutChart = new Chart(doughnutCtx, doughnutConfig);
    document.getElementById('randomizeDoughnutChart').style.display = 'none';
}

// Inicializar Gráfico Radar (Algoritmos e Lógica de Programação)
function initRadarChart() {
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const radarData = {
        labels: ['Atividade 1 (0.0/10.0)', 'Atividade 2 (0.0/10.0)', 'Atividade Sala (1.5/10.0)', 'Faltas (2/44)'],
        datasets: [{
            label: 'Desempenho',
            data: [0.0, 0.0, 1.5, 2],
            fill: true,
            backgroundColor: 'rgba(155, 89, 182, 0.2)',
            borderColor: 'rgba(155, 89, 182, 1)',
            pointBackgroundColor: 'rgba(155, 89, 182, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(155, 89, 182, 1)'
        }]
    };
    
    const radarConfig = {
        type: 'radar',
        data: radarData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    };
    
    const radarChart = new Chart(radarCtx, radarConfig);
    document.getElementById('randomizeRadarChart').style.display = 'none';
}

// Inicializar Gráfico de Área Polar (Design Digital)
function initPolarChart() {
    const polarCtx = document.getElementById('polarChart').getContext('2d');
    const polarData = {
        labels: ['Atividade 1 (0.0/10.0)', 'Atividade 2 (0.0/10.0)', 'Resultado PI (0.0/10.0)', 'Faltas (4/38)'],
        datasets: [{
            label: 'Notas e Faltas',
            data: [0.0, 0.0, 0.0, 4],
            backgroundColor: ['rgba(26, 188, 156, 0.7)', 'rgba(46, 204, 113, 0.7)', 'rgba(52, 152, 219, 0.7)', 'rgba(231, 76, 60, 0.7)'],
            borderColor: ['rgba(26, 188, 156, 1)', 'rgba(46, 204, 113, 1)', 'rgba(52, 152, 219, 1)', 'rgba(231, 76, 60, 1)'],
            borderWidth: 1
        }]
    };
    
    const polarConfig = {
        type: 'polarArea',
        data: polarData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    };
    
    const polarChart = new Chart(polarCtx, polarConfig);
    document.getElementById('randomizePolarChart').style.display = 'none';
}

