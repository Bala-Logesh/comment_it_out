import { useState } from 'react';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import '../css/Navbar.css'

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(true)
    return (
        <div className='Navbar flex'>
            <div className="Navbar__left">
                <h3><Link to='/'>&#47;&#47;Comment_It_Out</Link></h3>
            </div>
            {
                isAuth ? (
                    <div className="Navbar__right flex">
                        <h3 className='desktop'><Link to='/home'>BL</Link></h3>
                        <h3 className='search flex'><Link to='/search'><SearchIcon /></Link></h3>
                    </div>
                ) : (
                    <div className="Navbar__right flex">
                        <h3 className='desktop'><Link to='/login'>Login</Link></h3>
                        <h3 className='desktop'><Link to='/signup'>SignUp</Link></h3>
                        <h3 className='mobile flex'><Link to='/login'><VpnKeyIcon /></Link></h3>
                    </div>
                )    
            }
        </div>
    )
}

export default Navbar
