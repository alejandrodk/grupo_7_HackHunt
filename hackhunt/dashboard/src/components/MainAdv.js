import React, {Component} from 'react';
import Axios from 'axios';

class MainAdv extends Component {
    constructor(props){
        super(props);
        this.state = {
            anuncios : [],
            siguiente : '',
            anterior : ''
        }
    }

    componentDidMount(){

        Axios.get('http://localhost:3000/api/anuncios?page=0')
        .then(result => {
            
            this.setState({
                anuncios : result.data.response,
                siguiente : result.data.next,
                anterior : result.data.prev
            })
        })
    }
    // event handler
    
    cargarSiguiente(){
        let { siguiente } = this.state;

        Axios.get(siguiente)
        .then(result => {
            
            this.setState({
                anuncios : result.data.response,
                siguiente : result.data.next,
                anterior : result.data.prev
            })
        })
    }
    cargarAnterior(){
        let { anterior } = this.state;

        Axios.get(anterior)
        .then(result => {
            
            this.setState({
                anuncios : result.data.response,
                siguiente : result.data.next,
                anterior : result.data.prev
            })
        })
    }

    // render del componente 
    render(){
        let { anuncios, siguiente, anterior } = this.state;
        return(
            <div className="main-adv">
                <div className="header">
                    <h2>Búsquedas activas</h2>
                    <div className="pagination">
                        {
                            anterior != null ? 
                            <button id="prev"
                            onClick={ () => this.cargarAnterior() }
                            >
                            <i className="fas fa-arrow-circle-left"></i>
                            Anterior
                            </button>
                            :
                            ''
                        }
                        {
                            siguiente != null ? 
                            <button id="next"
                            onClick={ () => this.cargarSiguiente() }
                            >
                            <i className="fas fa-arrow-circle-right"></i>
                            Siguiente
                            </button>
                            :
                            ''
                        }
                    </div>
                </div>
                <div className="content">
                    { anuncios.map( (item, i) => {
                        return(
                            <div className="item" key={i}>
                                <div className="avatar">
                                    <img src={item.empresas.cmp_avatar} alt={ item.adv_title }/>
                                </div>
                                <h2>{ item.adv_title }</h2>
                                <h3>{ item.empresas.cmp_name }</h3>
                                <h3>{ item.adv_location }</h3>
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
}

export default MainAdv;