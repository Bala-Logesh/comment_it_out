import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './Navbar.css'

const Navbar = () => {
    const { user } = useSelector(state => state.auth)

    return (
        <div className='Navbar flex'>
            <div className="Navbar__left flex">
                <h3><Link to='/'>&#47;&#47;Comment_It_Out</Link></h3>
            </div>
            {
                user ? (
                    <div className="Navbar__right flex">
                        <h3 className='desktop flex'><Link to='/123/info' className='flex'><img src={ user.profilePic } alt='Avatar' /></Link></h3>
                        <h3 className='search flex'><Link to='/search'><SearchIcon /></Link></h3>
                    </div>
                ) : (
                    <div className="Navbar__right flex">
                        <h3 className='desktop'><NavLink to='/login' activeClassName='text-active' className='text'>Login</NavLink></h3>
                        <h3 className='desktop'><NavLink to='/signup' activeClassName='text-active' className='text'>SignUp</NavLink></h3>
                        <h3 className='mobile flex'><Link to='/login'><VpnKeyIcon /></Link></h3>
                    </div>
                )    
            }
        </div>
    )
}

export default Navbar
