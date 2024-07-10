import { useState } from 'react';
import './App.css';

function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  const mostrarDatos = () => {
    alert(nombre)
  }

  return (
    <div className="App">
      <div className="datos">
        <label>Nombre: <input onChange={(event)=>{setNombre(event.target.value)}} type="text"/></label><br/><br/>
        <label>Edad: <input onChange={(event)=>{setEdad(event.target.value)}} type="number"/></label><br/><br/>
        <button onClick={mostrarDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
