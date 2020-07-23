import React, { useState } from 'react';
import './App.css';
import { TareaTabla } from './componentes/TareaTabla.js';
import { CrearTarea } from './componentes/CrearTarea.js';

function App() {

  const [datosTareas, setdatosTareas] = useState([
    { nombre: "Tarea uno", completado: false, importante: true },
    { nombre: "Tarea dos", completado: false, importante: true },
    { nombre: "Tarea Tres", completado: true, importante: false },
    { nombre: "Tarea Cuatro", completado: false, importante: true }
  ]);
  //const [showCompleted, setshowCompleted] = useState(true);
  const crearNuevaTarea = tareaNombre => {
    if (!datosTareas.find(t => t.nombre === tareaNombre)) {
      setdatosTareas([...datosTareas, { nombre: tareaNombre, completado: false }])
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
    <div>
      <CrearTarea crearNuevaTarea={crearNuevaTarea} />
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
            <th>Importante</th>
          </tr>
        </thead>
        <tbody>
          {tareaTablaFilas(false)}
          <label>Tareas Completadas</label>
          {tareaTablaFilas(true)}
        </tbody>
      </table>
    </div>
  );
}
export default App;
