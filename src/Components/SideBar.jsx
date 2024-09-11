import './SideBar.css'
import {SideBarData} from './SideBarData'
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom'

function SideBar(){
    return(
        <div className="SideBar">
            <div className='SideBarList'>
            <ul className="SideBarItems">
            <li className="row User" id={window.location.pathname == "/User" ? "active" : ""}><div className='Icon-User'> <PersonIcon style={{fontSize:"64px"}}/></div> </li>
            {SideBarData.map((val,key) =>{
                return(
               <li 
               className='row' 
               key = {key}
               id = {window.location.pathname == val.link ? "active" : ""}
               >
                <Link to = {val.link} >
               <div className="Icon">{val.icon}</div>
               </Link>
                </li>
                )
            })}
            </ul>
            </div>
        </div>
    );
}

export default SideBar;