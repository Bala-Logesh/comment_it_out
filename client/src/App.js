import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './css/utils.css'
import './css/App.css'

import Main from './components/Main/Main'

import Popup from './components/Popup/Popup'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'

import Landing from './components/Landing/Landing'
import UserSuggestions from './components/UserSuggestions/UserSuggestions'
import Posts from './components/Posts_group/Posts/Posts'

import Login from './components/Forms/Login'
import Register from './components/Forms/Register'
import Forgot from './components/Forms/ForgotPwd/Forgot'
import Forgot1 from './components/Forms/ForgotPwd/Forgot1'
import Forgot2 from './components/Forms/ForgotPwd/Forgot2'

import UserDetails from './components/Forms/UserDetails'
import UserPosts from './components/Posts_group/UserPosts/UserPosts'
import FavPosts from './components/Users_group/FavPosts/FavPosts'
import Following from './components/Users_group/Following/Following'
import EditUser from './components/Forms/EditUser'

import PostForm from './components/Forms/PostForm'
import EditPostForm from './components/Forms/EditPostForm'
import Search from './components/Posts_group/Search/Search'

const App = () => {
  return (
    <Router>
      <Popup />
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Switch>
            {/* Landing Page route */}
            <Route exact path='/'>
              <Main Center={ Landing } />
            </Route>

            {/* Home page route */}
            <Route path='/home'>
              <Main Menu={ Menu } Center={ Posts } Suggestions={ UserSuggestions } />
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
            <Route path='/:id/info'>
              <Main Menu={ Menu } Center={ UserDetails } />
            </Route>
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
              <Main Menu={ Menu } Center={ EditUser } />
            </Route>

            {/* Suggested users route */}
            <Route path='/suggested'>
              <Main Menu={ Menu } Center={ UserSuggestions } />
            </Route>

            {/* Post related route */}
            <Route path='/create'>
              <Main Menu={ Menu } Center={ PostForm } />
            </Route>
            <Route path='/editPost/:id'>
              <Main Menu={ Menu } Center={ EditPostForm } />
            </Route>
            <Route path='/search'>
              <Main Menu={ Menu } Center={ Search } />
            </Route>

            {/* Error Routes */}
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default App;
