import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { delUsertModal } from '../../redux'
import './Popup.css'

const PopupUser = () => {
    const { user } = useSelector(state => state.misc)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const closeModal = (e) => {
        if (e.target.id === 'popup') {
            dispatch(delUsertModal())
        }
    }

    const delUserFn = () => {
        // dispatch(logoutUser())
        dispatch(delUsertModal())
        history.push('/register')
    }

    return (
        <div className={ user ? 'Popup flex' : 'hide-popup' } id='popup' onClick={ closeModal }>
            <div className="Popup__container flex">
                <h2>Are you sure to delete your account?</h2>
                <div className="Popup__buttons flex">
                    <button className='btn' onClick={ delUserFn }>Delete</button>
                    <Link to='/home' onClick={ () => dispatch(delUsertModal()) }><button className='btn'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PopupUser
