import React, { useState } from "react";

export const CrearTarea = props => {

    const [NuevoNombreTarea, setNuevoNombreTarea] = useState("");

    const actualizarTarea = e => setNuevoNombreTarea(e.target.value);

    const creaNuevaTarea = () => {
        if(NuevoNombreTarea!==""){
        props.crearNuevaTarea(NuevoNombreTarea);}
        else{console.log("vacio");}
       }
    return (
             <tr>
                    <td>
                        <input type="text" placeholder="Ingresa una Nueva Tarea"
                            required
                            value={NuevoNombreTarea}
                            onChange={actualizarTarea}/></td>
                            <td>
                        <button className="botonform" onClick={creaNuevaTarea}></button>
                    </td>
                </tr>
         );
};