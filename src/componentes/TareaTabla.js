import React from "react";

export const TareaTabla = props => (

    <tr key={props.tarea.nombre}>
        <td> 
            <button 
            className={props.tarea.completado ? 'buttondesactivado' : 'buttonactivado'}
            onClick={() => props.cambioEstadoTarea(props.tarea)} > {props.tarea.nombre}</button>
        </td>
        <td>
            <button
                className={props.tarea.importante ?'botonverde':'botongris'}
                onClick={() => props.tarea.completado?'':props.cambiarEstado(props.tarea)}
         ></button>
        </td>
    </tr>
);