import React, { Component } from "react";
import Card from './Card'
import Axios from "axios";

class MainCards extends Component {
    // iniciar estado de componente
    constructor(props){
        super(props);
        this.state = {
            usuarios : {
                clientes : 0,
                empresas : 0,
            },
            anuncios : {
                activos : 0, 
                caducados : 0,
            },
            postulaciones : {
                clientes : 0
            }
        }

    }
    // ciclo de vida
    componentDidMount(){

        Axios.all([
            Axios.get('http://localhost:3000/api/clientes/'),
            Axios.get('http://localhost:3000/api/empresas/'),
            Axios.get('http://localhost:3000/api/anuncios/'),
            Axios.get('http://localhost:3000/api/anuncios/postulaciones')
        ])
        .then( response => {
            
            this.setState({
                usuarios : {
                    clientes : response[0].data.total_items,
                    empresas : response[1].data.total_items,
                },
                anuncios : {
                    activos : response[2].data.actives,
                    caducados : response[2].data.expired,
                },
                postulaciones : {
                    clientes : response[3].data.postulantes
                }
            })
        })
        .catch(error => console.log(error))
    }

    componentDidUpdate(){
        
    }
    // event handler

    // render de componente
    render(){
        let { usuarios, anuncios, postulaciones } = this.state;
        
        return (
            <div className="main-cards">
                <Card tipo="users" title="Total de usuarios registrados">
                    <i className ="fas fa-users" />
                    <p><span id="bold">{ usuarios.clientes }</span> clientes</p>
                    <i className ="far fa-building" />
                    <p><span id="bold">{ usuarios.empresas }</span> empresas</p>
                </Card>
                <Card tipo="adv" title="Total de anuncios creados">
                    <p><span id="bold"> { anuncios.activos } </span> activos</p>
                    <p><span id="bold"> { anuncios.caducados } </span> caducados</p>
                </Card>
                <Card tipo="postulations" title="Total de postulaciones">
                    <i className="fas fa-user-check"></i>
                    <p><span id="bold">{ postulaciones.clientes }</span> clientes postulados</p>
                </Card>
            </div>
        )
    }
}

export default MainCards;