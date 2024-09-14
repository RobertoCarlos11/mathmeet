import './LogIn.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

const LogIn = () => {

    const [Matricula, setMatricula] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const History = useHistory();
    const handleSubmit = () => {
        History.push("/Home");
    }

    return ( 
        <div className="Container-Form">
        <div className="Form">
        <h2 className="IniciarSesionRegistrar">Iniciar<span> Sesión</span></h2>
       <form onSubmit={handleSubmit}>
        <div className="inputbox">
        <p>Matricula</p>
        <input className="inputLine" value={Matricula} onChange={(e)=>setMatricula(e.target.value)} name="Matricula" type="text"/> 
        </div>
        <div className="inputbox">
        <p>Contraseña</p>
        <input className="inputLine" value={Contraseña} onChange={(e)=>setContraseña(e.target.value)} name="Contraseña" type="password"/> 
        </div>
        <div className="btn">
        <Link to ="/Chats">
        <button className ="btn-submit" > Enviar </button> 
        </Link>  
        </div>  
       </form> 
       <p class="Register">¿No tienes cuenta? <Link to="/Register"><span id="Registrarse">Registrate</span></Link></p>
       </div>
        <div className="MathMeet">
        <h1 className="Title">Math<span>Meet</span></h1>
        <p className='Slogan'>
          Donde Los Math <span>Conocen a los Meet.</span>
        </p>
        </div>
      </div>
     );
}

export default LogIn;