import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/utils.css'
import './css/App.css'
import Navbar from './components/Navbar';
import Main from './Templates/Main';
import Menu from './components/Menu';
import Posts from './components/Posts';
import UserSuggestions from './Pages/UserSuggestions'
import Landing from './Pages/Landing';

const App = () => {

  return (
    <Router>
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Route path='/home'>
            <Main Menu={ Menu } Center={ Posts } Suggestions={ UserSuggestions } />
          </Route>
          <Route path='/suggested'>
            <Main Menu={ Menu } Center={ UserSuggestions } />
          </Route>
          <Route exact path='/'>
            <Main Center={ Landing } />
          </Route>
        </div>
      </div>
    </Router>
  )
};

export default App;
