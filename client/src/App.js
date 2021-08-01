import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/utils.css'
import './css/App.css'
import Navbar from './components/Navbar';
import Main from './Templates/Main';
import Menu from './components/Menu';
import UserSuggestions from './Pages/UserSuggestions'
import Landing from './Pages/Landing';
import Posts from './Pages/Posts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/ForgotPwd/Forgot';
import Forgot1 from './Pages/ForgotPwd/Forgot1';
import Forgot2 from './Pages/ForgotPwd/Forgot2';
import PostForm from './Pages/PostForm';
import EditPostForm from './Pages/EditPostForm';
import UserPosts from './Pages/UserPosts';
import EditUser from './Pages/EditUser';
import FavPosts from './Pages/FavPosts';
import Following from './Pages/Following';

const App = () => {
  return (
    <Router>
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Switch>

            {/* Home page route */}
            <Route path='/home'>
              <Main Menu={ Menu } Center={ Posts } Suggestions={ UserSuggestions } />
            </Route>

            {/* Suggested users route */}
            <Route path='/suggested'>
              <Main Menu={ Menu } Center={ UserSuggestions } />
            </Route>

            {/* Login and Signup route */}
            <Route path='/login'>
              <Main Center={ Login } />
            </Route>
            <Route path='/signup'>
              <Main Center={ Register } />
            </Route>

            {/* Forgot Password route */}
            <Route path='/forgot'>
              <Main Center={ Forgot } />
            </Route>
            <Route path='/forgot1/:email'>
              <Main Center={ Forgot1 } />
            </Route>
            <Route path='/forgot2/:id'>
              <Main Center={ Forgot2 } />
            </Route>

            {/* User related route */}
            <Route path='/:id/posts'>
              <Main Menu={ Menu } Center={ UserPosts } />
            </Route>
            <Route path='/:id/favposts'>
              <Main Menu={ Menu } Center={ FavPosts } />
            </Route>
            <Route path='/:id/following'>
              <Main Menu={ Menu } Center={ Following } />
            </Route>
            <Route path='/:id/settings'>
              <Main Center={ EditUser } />
            </Route>

            {/* Post related route */}
            <Route path='/create'>
              <Main Center={ PostForm } />
            </Route>
            <Route path='/editPost/:id'>
              <Main Center={ EditPostForm } />
            </Route>

            {/* Landing Page route */}
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
