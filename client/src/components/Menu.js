import { Link, NavLink } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import '../css/Menu.css'

const Menu = () => {
    return (
        <div className="Menu flex">
            <NavLink 
                activeClassName="Menu__item-active" 
                to="/123/info" 
                className="Menu__item flex" 
                data-after='User Info'
            >
                <PersonIcon />
                <span>User Info</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/123/posts"
                className="Menu__item flex"
                data-after='My Posts'
            >
                <FeaturedPlayListIcon />
                <span>My Posts</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/create"
                className="Menu__item flex"
                data-after='Create Post'
            >
                <PostAddIcon />
                <span>Create Post</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/123/favposts"
                className="Menu__item flex"
                data-after='Favourites'
            >
                <FavoriteIcon />
                <span>Favourites</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/123/following"
                className="Menu__item flex"
                data-after='Following'
            >
                <PeopleAltIcon />
                <span>Following</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/123/settings"
                className="Menu__item flex"
                data-after='User Settings'
            >
                <SettingsIcon />
                <span>User Settings</span>
            </NavLink>
            <NavLink
                activeClassName="Menu__item-active"
                to="/suggested"
                className="Menu__item flex"
                data-after='Suggested Users'
            >
                <RecordVoiceOverIcon />
                <span>Suggested Users</span>
            </NavLink>
            <Link
                to="/"
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
