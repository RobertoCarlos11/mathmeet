import './SideBar.css'
import {SideBarData} from './SideBarData'
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom'
import GroupImg from '../Images/DAMN.png'

import AddIcon from '@mui/icons-material/Add';

function SideBar(){
    return(
        <div className="SideBar">
            <div className='SideBarList'>
            <ul className="SideBarItems">
            <li className="row User" id={window.location.pathname == "/User" ? "active" : ""}>
            <Link to="/">
            <div className='Icon-User'> <PersonIcon style={{fontSize:"32px"}}/></div>
            </Link>
            </li>
            {SideBarData.map((val,key) =>{
                return(
               <li 
               className='row' 
               key = {key}
               id = {window.location.pathname == val.link ? "active" : ""}
               >
                <Link to = {val.link}>
               <div className="Icon">{val.icon}</div>
               </Link>
                </li>
                )
            })}
            </ul>

            </div>
            <div className='SideBarInfo'>
            <ul className='Chat'>
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

        </div>
    );
}

export default SideBar;