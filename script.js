//estudo e implementação de gráficos, utilizando a biblioteca ChartJs
//(https://www.chartjs.org/c)


var ctx = document.getElementById('myChart');

//lista
var namesLabel = document.getElementById('nameLabel')
var graphData = document.getElementById('numberLabel')
var myDiv;

const btn = document.getElementById('opa')

var agua = []
var luz = []
var telefone = []
var nomes = []


graphBar(nomes, agua, luz, telefone)

btn.addEventListener('click', () => {
    var namesLabel = document.getElementById('nameLabel').value
    var campo1 = document.getElementById('numberLabel').value
    var campo2 = document.getElementById('numberLabel2').value
    var campo3 = document.getElementById('numberLabel3').value
    nomes.push(namesLabel)
    agua.push(campo1)
    luz.push(campo2)
    telefone.push(campo3)
    
    myDiv.destroy()

    graphBar(nomes, agua, luz, telefone)

})


function graphBar(nomes, agua, luz, telefone) {
    myDiv =
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: nomes,
                datasets: [{
                    label: '# agua',
                    data: agua,
                    borderWidth: 1
                },{
                    label: '# luz',
                    data: luz,
                    borderWidth: 1
                },
                {
                    label: '# telefone',
                    data: telefone,
                    borderWidth: 1
                }
            ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
} 
