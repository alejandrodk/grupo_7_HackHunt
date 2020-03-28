import React, {Component} from 'react';
import Axios from 'axios';


class MainRanking extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            empresas:[]
        }
    }

    componentDidMount()
    {
        Axios.get('http://localhost:3000/api/empresas/rank_postulados')
        .then(result =>
            {
                
                this.setState({
                empresas:result.response,
                })
                
            })
        .catch(error => console.log(error))
    }

    componentDidUpdate(){
        
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
                            <img src="" alt=""/>
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