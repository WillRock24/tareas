
import React from "react";

export const TareaTabla = props => (

    <tr key={props.tarea.nombre}>
        <td> <button className={props.tarea.completado ? 'btndesactivado' : 'button'} onClick={() => props.cambioEstadoTarea(props.tarea)} >{props.tarea.nombre}</button>
        </td>
        <td>
            <input
                type="checkbox"
                className="checkboxtrue"
                checked={props.tarea.importante}
                onChange={() => props.cambiarEstado(props.tarea)}
            />
        </td>
    </tr>
);