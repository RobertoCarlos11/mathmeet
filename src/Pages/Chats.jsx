import SideBar from '../Components/SideBar.jsx'
import './Chat.css'
import GroupImg from '../Images/DAMN.png'

function Home()
{
    return(
        <div className='Chats'>
            <SideBar/>
            <div className='Content-container'>
            <div className='Chat-Container'>
            <p>Hola aqui iria lo del chat lololololo</p>
            </div>
            <div className="ChatInfo-Container">
                <div className ="GroupInfo">
                <img src={GroupImg} className='GroupImage-Large'/>
                <p id="GroupName">Nombre del Grupo</p>
                </div>

                <div className='Members-Container'>
                <h2> Integrantes: </h2>
                <ul>
                    <li>Roberto Carlos Dominguez Espinosa</li>
                    <li>Max Andres Zertuche Perez</li>
                    <li>Isis Esmeralda Flores Montes</li>
                    <button id="AgregarIntegrante"> Agregar Integrante </button>
                </ul>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;