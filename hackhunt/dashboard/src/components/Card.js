import React from 'react';

function card(props){
    return (
        <div className ={`card ${ props.tipo }`}>
            <h2>{ props.title }</h2>
            <div className ="content">
            { props.children }
            </div>
        </div>
    )
}

export default card;