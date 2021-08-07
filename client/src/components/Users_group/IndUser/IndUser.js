import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { followUser } from '../../../redux';
import LaunchIcon from '@material-ui/icons/Launch';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import './IndUser.css'

const IndUser = ({ induser, auth }) => {
    const dispatch = useDispatch()
    
    const followed = induser?.following.find(user => user === auth.user._id)
    
    return (
        <div className='IndUser flex'>
            {
                induser && <h3 className='avatar flex'>{(induser.profilePic !== '') ? <img src={induser.profilePic} alt='Avatar' /> : induser.displayName} </h3>
            }
            <h4 className='username'>{ induser?.username }</h4>
            <h4 className='icons flex'><Link to={`/suggested/${induser._id}`}><LaunchIcon /></Link></h4>
            <h4 className={followed ? 'icons flex danger' : 'icons flex'} onClick={() => dispatch(followUser(auth.user._id, induser._id))}>{followed ? <PersonAddDisabledIcon /> : <PersonAddIcon /> }</h4>
        </div>
    )
}

export default IndUser
