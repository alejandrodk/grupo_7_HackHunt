import React, {Component} from 'react';
import Chart from 'chart.js';

class MainChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {

        const node = this.node;
    
        var myChart = new Chart(node, {
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

    componentDidUpdate(){

    }   
    
    render(){
        return(
            <div className="main-chart">
            <canvas
                style={{ width: 800, height: 300 }}
                ref={node => (this.node = node)}
            />
            </div>
        )
    }
}

export default MainChart;