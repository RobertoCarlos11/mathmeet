import SideBar from '../Components/SideBar.js'
import SideBarInfo from '../Components/SideBarInfo.js'

function Home()
{
    return(
        <div className='Chats'>
            <SideBar/>
            <SideBarInfo />
            <div className='Content-container'>hola aqui iria lo del chat</div>
        </div>
    );
}

export default Home;