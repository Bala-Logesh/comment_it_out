import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar flex'>
            <div className="Navbar__left">
                <h3><Link to='/'>&#47;&#47;Comment_It_Out</Link></h3>
            </div>
            <div className="Navbar__right flex">
                <h3 className='desktop'><Link to='/'>BL</Link></h3>
                <h3 className='search'><Link to='/'><SearchIcon /></Link></h3>
            </div>
        </div>
    )
}

export default Navbar
