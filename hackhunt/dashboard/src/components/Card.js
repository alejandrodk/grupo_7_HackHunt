import React from 'react';

function card(){
    return (
        <div className ="card">
            <h2>Total de usuarios registrados</h2>
            <div className ="content">
                <i className ="fas fa-users" />
                <p><span id="bold">25</span> clientes</p>
                <i className ="far fa-building" />
                <p><span id="bold">15</span> empresas</p>
            </div>
        </div>
    )
}

export default card;