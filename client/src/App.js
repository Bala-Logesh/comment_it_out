import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/utils.css'
import './css/App.css'
import Navbar from './components/Navbar';
import Main from './Templates/Main';
import Posts from './components/Posts';
import UserSuggestions from './Pages/UserSuggestions'

const App = () => {

  return (
    <Router>
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Route exact path='/'>
            <Main Center={ Posts } Suggestions={ UserSuggestions } />
          </Route>
          <Route path='/suggested'>
            <Main Center={ UserSuggestions } />
          </Route>
        </div>
      </div>
    </Router>
  )
};

export default App;
