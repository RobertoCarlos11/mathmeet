import './SideBar.css'
import { useState } from 'react';
import {SideBarData} from './SideBarData'
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom'
import GroupImg from '../Images/DAMN.png'
import SideBarInfo from './SideBarInfo.jsx'

import AddIcon from '@mui/icons-material/Add';

const SideBar = () =>{

    const [pagina,Setpagina] = useState(window.location.pathname);
    console.log(window.location.pathname);

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
            <SideBarInfo Page={pagina}/>
        </div>
    );
}

export default SideBar;