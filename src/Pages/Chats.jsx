import SideBar from '../Components/SideBar.jsx'
import './Chat.css'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GroupImg from '../Images/DAMN.png'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';

function Home()
{
    return(
        <div className='Chats'>
            <SideBar/>
            <div className='Content-container'>
            <div className='Chat-Container'>
            <div className='Messages-Container'>
            hola
            </div>
            <div className='MessageInput-Container'>
                <div className='btn-container'>
                <button  id="AddFile"><AddIcon className="Icon-container"/></button>
                </div>
                <div className='btn-container'>
                <button  id="Emojis"><EmojiEmotionsIcon className="Icon-container"/></button>
                </div>
                <input type="text" id="Message"></input>
                <div className='btn-container'>
                <button id="SendMessage"><SendIcon className="Icon-container" /> </button>
                </div>
            </div>
            </div>
            
            <div className="ChatInfo-Container">
                <div className ="GroupInfo">
                <img src={GroupImg} className='GroupImage-Large'/>
                <p id="GroupName">Nombre del Grupo</p>
                </div>

                <div className='Members-Container'>
                <h3> Integrantes: </h3>
                <div className="MembersList" >
                <ul>
                    <li>Roberto Carlos Dominguez Espinosa</li>
                    <li>Max Andres Zertuche Perez</li>
                    <li>Isis Esmeralda Flores Montes</li>
                    
                </ul>
                    <button id="AgregarIntegrante"><AddIcon/> Agregar Integrante </button>
                </div>
            </div>

            <div className="Tasks-Container">
                <h3>Tarea(s):</h3>
            <div className='TasksList'>
                <ul>
                    <li className='Task'>
                         <div className="Icon-container"><AssignmentIcon style={{fontSize:"40px"}}/></div>
                            <div className='TaskInfo-container'>
                                <h4>Nombre De Tarea</h4>
                                <p>Vencimiento: 25/04/2022</p>
                            </div>
                    </li>

                    <li className='Task'>
                         <div className="Icon-container"><AssignmentIcon style={{fontSize:"40px"}}/></div>
                            <div className='TaskInfo-container'>
                                <h4>Nombre De Tarea</h4>
                                <p>Vencimiento: 25/04/2022</p>
                            </div>
                    </li>

                    <li className='Task'>
                         <div className="Icon-container"><AssignmentIcon style={{fontSize:"40px"}}/></div>
                            <div className='TaskInfo-container'>
                                <h4>Nombre De Tarea</h4>
                                <p>Vencimiento: 25/04/2022</p>
                            </div>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;