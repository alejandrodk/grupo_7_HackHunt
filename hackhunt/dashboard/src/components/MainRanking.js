import React, {Component} from 'react';
import Axios from 'axios';


class MainRanking extends Component {

    state = {
        prueba : 0,
        empresas : []
    }

    componentDidMount(){

        Axios.get('http://localhost:3000/api/empresas/rank_postulados')
        .then(result =>{
            
            this.setState({
                empresas : result.data.response
            })
               
        })
        .catch(error => console.log(error))
    }

    render(){
        let {empresas} = this.state;
        
        return(
            
            <div className="main-ranking">
                <h2>Empresa más postulada</h2>
                <div className="content">
                {empresas.map((empresa,i) => (
                    <div key={i} className="item">
                        <div className="avatar">
                            <img src={empresa.avatar} alt={empresa.empresa} />
                        </div>
                        <h1>{empresa.empresa}</h1>
                        <h3>{empresa.cant_anuncios} Anuncios</h3>
                        <h3>{empresa.cant_postulantes} Postulantes</h3>
                    </div>
                    ))}
                </div> 
            </div>
        )
    }
}

export default MainRanking;