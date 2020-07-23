import React, { useState } from "react";

export const CrearTarea = props => {

    const [NuevoNombreTarea, setNuevoNombreTarea] = useState("");

    const actualizarTarea = e => setNuevoNombreTarea(e.target.value);

    const creaNuevaTarea = () => {
        props.crearNuevaTarea(NuevoNombreTarea);
    
        setNuevoNombreTarea('');
       }
  
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <input
                            type="text"
                            placeholder="Ingresa una Nueva Tarea"
                            required
                            value={NuevoNombreTarea}
                            onChange={actualizarTarea}
                        /></td><td>
                        <button className="botonform" onClick={creaNuevaTarea}>+</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};