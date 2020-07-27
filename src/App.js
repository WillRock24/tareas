import React, { useState } from 'react';
import './App.css';
import { TareaTabla } from './componentes/TareaTabla.js';
import { CrearTarea } from './componentes/CrearTarea.js';


function App() {

  const [datosTareas, setdatosTareas] = useState([
    { nombre: "Tarea Uno", completado: false, importante: false },
    { nombre: "Tarea Dos", completado: false, importante: false },
    { nombre: "Tarea Tres", completado: true, importante: true },
    { nombre: "Tarea Cuatro", completado: false, importante: true }
  ]);
  //crear nueva tarea
  const crearNuevaTarea = tareaNombre => {
    if (!datosTareas.find(t => t.nombre === tareaNombre)) {
      setdatosTareas([...datosTareas, { nombre: tareaNombre, completado: false, importante:false }])
    }
  }
  //cambiar estado a Completado
  const cambioEstadoTarea = tarea =>
    setdatosTareas(
      datosTareas.map(t => (t.nombre === tarea.nombre ? { ...t, completado: true } : t))
    );
  //cambiar estado de tarea.importante
  const cambiarEstado = tarea =>
    setdatosTareas(
      datosTareas.map(t => (t.nombre === tarea.nombre ? { ...t, importante: !t.importante } : t))
    );

  //Mostrar tabla tarea
  const tareaTablaFilas = (d) =>
    datosTareas
      .filter(tarea => tarea.completado === d)
      .map(tarea => (
        <TareaTabla tarea={tarea} key={tarea.nombre} cambioEstadoTarea={cambioEstadoTarea} cambiarEstado={cambiarEstado} />
      ));

  return (
    <div className="FormContainer">
   
      <table>
      <thead>
        <CrearTarea crearNuevaTarea={crearNuevaTarea}/>
        </thead>
        <tbody>
          <tr>
            <th>Tareas</th>
            <th>Importante</th>
          </tr>
          {tareaTablaFilas(false)}
          {tareaTablaFilas(true)}
        </tbody>
      </table>
    </div>
  );
}
export default App;
