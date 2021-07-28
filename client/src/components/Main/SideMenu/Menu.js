import { Link, NavLink } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import './Menu.css'

const Menu = () => {
    return (
        <div className="Menu flex">
            <NavLink 
                activeClassName="Menu__item-active" 
                to="/home" 
                className="Menu__item flex" 
                data-after='User Info'
            >
                <PersonIcon />
                <span>User Info</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/home"
                className="Menu__item flex"
                data-after='My Posts'
            >
                <FeaturedPlayListIcon />
                <span>My Posts</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/home"
                className="Menu__item flex"
                data-after='Create Post'
            >
                <PostAddIcon />
                <span>Create Post</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/home"
                className="Menu__item flex"
                data-after='Favourites'
            >
                <FavoriteIcon />
                <span>Favourites</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/home"
                className="Menu__item flex"
                data-after='Following'
            >
                <PeopleAltIcon />
                <span>Following</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/home"
                className="Menu__item flex"
                data-after='User Settings'
            >
                <SettingsIcon />
                <span>User Settings</span>
            </NavLink>
            <Link
                to="/home"
                className="Menu__item flex"
                data-after='Log Out'
            >
                <PowerSettingsNewIcon />
                <span>Log Out</span>
            </Link>
        </div>
    )
}

export default Menu
