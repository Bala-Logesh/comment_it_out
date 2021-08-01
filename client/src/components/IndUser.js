import LaunchIcon from '@material-ui/icons/Launch';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import avatar from '../images/avatar.jpg'
import '../css/IndUser.css'

const IndUser = () => {
    const liked = true
    return (
        <div className='IndUser flex'>
            <h3 className='avatar flex'><img src={ avatar } alt='Avatar' /></h3>
            <h4 className='username'>BalaLogeshsadfsdfadfsfBalaLogeshsadfsdfadfsf</h4>
            <h4 className='icons flex'><LaunchIcon /></h4>
            { liked ? <h4 className='icons flex danger'><PersonAddDisabledIcon /></h4> : <h4 className='icons flex'><PersonAddIcon /></h4> }
        </div>
    )
}

export default IndUser
