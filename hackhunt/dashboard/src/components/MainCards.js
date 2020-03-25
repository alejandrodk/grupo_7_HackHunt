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
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}

export default MainCards;