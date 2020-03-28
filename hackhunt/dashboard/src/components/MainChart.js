import React, {Component} from 'react';
import Chart from 'chart.js';

class MainChart extends Component {
    constructor(props){
        super(props);
        this.canvas = React.createRef();
        this.state = {
            
        }
    }
    
    componentDidMount() {
        const chart = this.canvas.current.getContext('2d')
        var myChart = new Chart(chart, {
            type: "doughnut",
            data: {
                labels: ["Postulaciones activas", "Vistas por la empresa"],
                datasets: [
                    {
                      data: [102,93],
                      backgroundColor: ["#a8e004","#f83e82"]
                    }
                ]
            }
        })
        console.log(myChart);
    }
        
    render(){
        return(
            <div className="main-chart">
            <canvas
                 width= {450} height= {400} 
                ref={ this.canvas }
            />
            </div>
        )
    }
}

export default MainChart;