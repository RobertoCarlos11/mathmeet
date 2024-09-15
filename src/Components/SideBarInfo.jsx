import AddIcon from '@mui/icons-material/Add';
import GroupImg from '../Images/DAMN.png'
import './SideBarInfo.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIcon from '@mui/icons-material/Assignment';

function SideBarInfo(props) {

    if(props.Page == '/Chats')
    return ( 
        <div className='SideBarInfo'>
            <ul>
                <li>
                    <div className='ChatContainer'>
                    <img src={GroupImg} className='ImgGroup'/>
                    <div className='GroupInformation'>
                    <h1 className="GroupName"> GRUPO 1</h1>
                    <p className="LastMessageSent">Ultimo Mensaje Enviado</p>
                    </div>
                    <p className="HourMessage">9:54 AM</p>
                </div>
               </li>
               
               <li>
                    <div className='ChatContainer'>
                    <img src={GroupImg} className='ImgGroup'/>
                    <div className='GroupInformation'>
                    <h1 className="GroupName"> GRUPO 2</h1>
                    <p className="LastMessageSent">Ultimo Mensaje Enviado</p>
                    </div>
                    <p className="HourMessage">9:54 AM</p>
                </div>
               </li>

               <li>
                    <div className='ChatContainer'>
                    <img src={GroupImg} className='ImgGroup'/>
                    <div className='GroupInformation'>
                    <h1 className="GroupName"> GRUPO 3</h1>
                    <p className="LastMessageSent">Ultimo Mensaje Enviado</p>
                    </div>
                    <p className="HourMessage">9:54 AM</p>
                </div>
               </li>
            </ul>
            <button id="AddChat"><AddIcon/> Nuevo Chat </button>
            </div>

        
     );

     if(props.Page === '/Shop')
        return ( 
            <div className='SideBarInfo'>
                <ul>
                    <li>
                        <div className='RewardContainer'>
                        <div className='Icon-container'><WorkspacePremiumIcon style={{fontSize:"60px"}} /></div>
                        <div className='GroupInformation'>
                        <h1 className="GroupName">ENTREGA 10 TAREAS</h1>
                        <p className="LastMessageSent">8/10 - 100 CalCoins</p>
                        </div>
                    </div>
                   </li>
                   
                   <li>
                        <div className='RewardContainer'>
                        <div className='Icon-container'><WorkspacePremiumIcon style={{fontSize:"60px"}} /></div>
                        <div className='GroupInformation'>
                        <h1 className="GroupName">ENTREGA 10 TAREAS</h1>
                        <p className="LastMessageSent">8/10 - 100 CalCoins</p>
                        </div>
                    </div>
                   </li>
                </ul>
                </div>
        );

        if(props.Page === '/Assignments')
            return ( 
                <div className='SideBarInfo'>
                    <ul>
                        <li>
                            <div className='AssignmentsContainer'>
                            <div className='Icon-container'><AssignmentIcon style={{fontSize:"60px"}} /></div>
                            <div className='GroupInformation'>
                            <h1 className="GroupName">Nombre de Tarea</h1>
                            <p className="LastMessageSent">Vencimiento 25/04/2024</p>
                            </div>
                        </div>
                       </li>
                    </ul>
                    </div>
            );
}
 
export default SideBarInfo;