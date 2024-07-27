import { useState } from 'react';
import './App.css';
import Axios from "axios"

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");

  const add = () => {
    Axios.post("http://localhost:8000/api/students", {
      name: name, 
      email: email,
      phone: phone,
      language: language
    }).then(() => {
      alert("Empleado registrado")
    });
  }

  return (
    <div className="App">
      <div className="datos">
        <label>Nombre: <input onChange={(event)=>{setName(event.target.value)}} type="text"/></label><br/><br/>
        <label>Email: <input onChange={(event)=>{setEmail(event.target.value)}} type="text"/></label><br/><br/>
        <label>Phone: <input onChange={(event)=>{setPhone(event.target.value)}} type="text"/></label><br/><br/>
        <label>Language: <input onChange={(event)=>{setLanguage(event.target.value)}} type="text"/></label><br/><br/>
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
