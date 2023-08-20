import './TodoCounter.css';
import React from "react";
import {TodoContext} from "../TodoContext";
const estilos = {
    backgroundColor: 'red'
}
//Estilo inline
/*style={
            {
                fontSize: '24px',
                textAlign:"center",
                margin:0,
                padding:'48px'
            }*/

function TodoCounter(){
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
            Has Completado <span>{completedTodos} </span> de <span>{totalTodos}</span> TODOs
        </h1>
    );
}

export {TodoCounter};