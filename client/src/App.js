import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginUsingToken } from './redux'

import './css/utils.css'
import './css/App.css'

import AuthRoute from './utils/AuthRoute'
import NoAuthRoute from './utils/NoAuthRoute'

import Main from './components/Main/Main'

import Popup from './components/Popup/Popup'
import PopupPost from './components/Popup/PopupPost'
import PopupUser from './components/Popup/PopupUser'
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

import Page404 from './components/ErrorPages/Page404'
import Page500 from './components/ErrorPages/Page500'
import Loading from './components/Loading/Loading'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loginUsingToken())
  }, [dispatch])

  return (
    <>
      <Loading />
      <Popup />
      <PopupUser />
      <PopupPost />
      <div className='App flex'>
        <div className='App__navbar'>
          <Navbar />
        </div>
        <div className='App__main'>
          <Switch>
            {/* Landing Page route */}
            <NoAuthRoute exact path='/' component={ () => <Main Center={ Landing } /> } />

            {/* Home page route */}
            <AuthRoute path='/home' component={ () => <Main Menu={ Menu } Center={ Posts } Suggestions={ UserSuggestions } /> } />

            {/* Login and Signup route */}
            <NoAuthRoute path='/login' component={ () => <Main Center={ Login } /> } />
            <NoAuthRoute path='/signup' component={ () => <Main Center={ Register } /> } />

            {/* Forgot Password route */}
            <NoAuthRoute path='/forgot' component={ () => <Main Center={ Forgot } /> } />
            <NoAuthRoute path='/forgot1/:email' component={ () => <Main Center={ Forgot1 } /> } />
            <NoAuthRoute path='/forgot2/:email' component={ () => <Main Center={ Forgot2 } /> } />

            {/* User related route */}
            <AuthRoute path='/:id/info' component={ () => <Main Menu={ Menu } Center={ UserDetails } /> } />
            <AuthRoute path='/:id/posts' component={ () => <Main Menu={ Menu } Center={ UserPosts } /> } />
            <AuthRoute path='/:id/favposts' component={ () => <Main Menu={ Menu } Center={ FavPosts } /> } />
            <AuthRoute path='/:id/following' component={ () => <Main Menu={ Menu } Center={ Following } /> } />
            <AuthRoute path='/:id/settings' component={ () => <Main Menu={ Menu } Center={ EditUser } /> } />

            {/* Suggested users route */}
            <AuthRoute path='/suggested' component={ () => <Main Menu={ Menu } Center={ UserSuggestions } /> } />

            {/* Post related route */}
            <AuthRoute path='/create' component={ () => <Main Menu={ Menu } Center={ PostForm } /> } />
            <AuthRoute path='/editPost/:id' component={ () => <Main Menu={ Menu } Center={ EditPostForm } /> } />
            <AuthRoute path='/search' component={ () => <Main Menu={ Menu } Center={ Search } /> } />

            {/* Error Routes */}
            <Route exact path='/500' component={ () => <Main Center={ Page500 } /> } />
            <Route path='/' component={ () => <Main Center={ Page404 } /> } />
          </Switch>
        </div>
      </div>
    </>
  )
};

export default App;
