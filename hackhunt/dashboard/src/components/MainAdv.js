import React, {Component} from 'react';

class MainAdv extends Component {
    render(){
        return(
            <div className="main-adv">
                <div className="header">
                    <h2>Búsquedas activas</h2>
                    <div className="pagination">
                        <button id="prev">
                            <i className="fas fa-arrow-circle-left"></i>
                            Anterior
                        </button>
                        <button id="next">
                            <i className="fas fa-arrow-circle-right"></i>
                            Siguiente
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="item">
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <h2>Diseñador gráfico UX/UI</h2>
                        <h3>Mercado Liebre</h3>
                        <h3>Capital Federal</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainAdv;