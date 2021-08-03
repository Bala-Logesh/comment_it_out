import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logoutModal, logoutUser } from '../../redux'
import './Popup.css'

const Popup = () => {
    const { logout } = useSelector(state => state.misc)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const closeModal = (e) => {
        if (e.target.id === 'popup') {
            dispatch(logoutModal())
        }
    }

    const logoutFn = () => {
        dispatch(logoutUser())
        dispatch(logoutModal())
        history.push('/')
    }

    return (
        <div className={ logout ? 'Popup flex' : 'hide-popup' } id='popup' onClick={ closeModal }>
            <div className="Popup__container flex">
                <h2>Are you sure to logout?</h2>
                <div className="Popup__buttons flex">
                    <button className='btn' onClick={ logoutFn }>Logout</button>
                    <Link to='/home' onClick={ () => dispatch(logoutModal()) }><button className='btn'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Popup
