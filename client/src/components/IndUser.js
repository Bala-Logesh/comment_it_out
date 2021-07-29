import LaunchIcon from '@material-ui/icons/Launch';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import avatar from '../images/avatar.jpg'
import '../css/IndUser.css'

const IndUser = () => {
    return (
        <div className='IndUser flex'>
            <h3 className='avatar flex'><img src={ avatar } alt='Avatar' /></h3>
            <h4 className='username'>BalaLogeshsadfsdfadfsfBalaLogeshsadfsdfadfsf</h4>
            <h4 className='icons flex'><LaunchIcon /></h4>
            <h4 className='icons flex'><PersonAddIcon /></h4>
        </div>
    )
}

export default IndUser
