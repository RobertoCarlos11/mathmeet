import './App.css';
import LogIn from './LogIn';
import Chats from './Pages/Chats.js';
import Shop from './Pages/Shop.js';
import Register from './Register.js';
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
        </Switch>
    </Router>
    </div>
  );
}

export default App;
