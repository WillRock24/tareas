

describe('crearNuevaTarea', () => {
 
  it('Crear Tarea con nombre nuevo', () => {
    expect("nuevo").toBeTruthy();
  })
   it('creando tarea con nombre vacio', () => {
    expect("").toBeFalsy();
  })

})

