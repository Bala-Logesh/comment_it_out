import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/utils.css'
import './css/App.css'
import Navbar from './components/Navbar';
import Main from './Templates/Main';
import Menu from './components/Menu';
import Posts from './components/Posts';
import UserSuggestions from './Pages/UserSuggestions'
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/ForgotPwd/Forgot';
import Forgot1 from './Pages/ForgotPwd/Forgot1';
import Forgot2 from './Pages/ForgotPwd/Forgot2';

const App = () => {

  return (
    <Router>
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Switch>
            <Route path='/home'>
              <Main Menu={ Menu } Center={ Posts } Suggestions={ UserSuggestions } />
            </Route>
            <Route path='/suggested'>
              <Main Menu={ Menu } Center={ UserSuggestions } />
            </Route>
            <Route path='/login'>
              <Main Center={ Login } />
            </Route>
            <Route path='/signup'>
              <Main Center={ Register } />
            </Route>
            <Route path='/forgot'>
              <Main Center={ Forgot } />
            </Route>
            <Route path='/forgot1/:email'>
              <Main Center={ Forgot1 } />
            </Route>
            <Route path='/forgot2/:id'>
              <Main Center={ Forgot2 } />
            </Route>
            <Route path='/'>
              <Main Center={ Landing } />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default App;
