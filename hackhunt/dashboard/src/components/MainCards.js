import React, { Component } from "react";
import Card from './Card'

class MainCards extends Component {
    // iniciar estado de componente
    //constructor(props){

    //}
    // ciclo de vida
    //componentDidMount(){

    //}
    //componentDidUpdate(){

    //}
    // event handler

    // render de componente
    render(){
        return (
            <div className="main-cards">
                <Card tipo="users" title="Total de usuarios registrados">
                    <i className ="fas fa-users" />
                    <p><span id="bold">25</span> clientes</p>
                    <i className ="far fa-building" />
                    <p><span id="bold">15</span> empresas</p>
                </Card>
                <Card tipo="adv" title="Total de anuncios creados">
                    <p><span id="bold">35</span> activos</p>
                    <p><span id="bold">15</span> caducados</p>
                </Card>
                <Card tipo="postulations" title="Total de postulaciones">
                    <i class="fas fa-user-check"></i>
                    <p><span id="bold">22</span> clientes postulados</p>
                </Card>
            </div>
        )
    }
}

export default MainCards;