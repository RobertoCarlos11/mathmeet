import './App.css';
import LogIn from './LogIn.jsx';
import Chats from './Pages/Chats.jsx';
import Shop from './Pages/Shop.jsx';
import Assignments from './Pages/Assignments.jsx';
import Register from './Register.jsx';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';  

function App() {
  return (
    <div className='App'>
    <Router>
        <Switch>
          <Route path="/" exact component ={LogIn}/>
          <Route path="/Chats" exact component={Chats}/>
          <Route path="/Shop" exact component={Shop}/>
          <Route path="/Register" exact component={Register}/>
          <Route path="/Assignments" exact component={Assignments}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
