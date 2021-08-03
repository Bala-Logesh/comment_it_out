import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { delPostModal } from '../../redux'
import './Popup.css'

const PopupPost = () => {
    const { post } = useSelector(state => state.misc)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const closeModal = (e) => {
        if (e.target.id === 'popup') {
            dispatch(delPostModal())
        }
    }

    const delPostFn = () => {
        // dispatch(logoutUser())
        dispatch(delPostModal())
        history.push('/home')
    }

    return (
        <div className={ post ? 'Popup flex' : 'hide-popup' } id='popup' onClick={ closeModal }>
            <div className="Popup__container flex">
                <h2>Are you sure to delete this post?</h2>
                <div className="Popup__buttons flex">
                    <button className='btn' onClick={ delPostFn }>Delete</button>
                    <Link to='/home' onClick={ () => dispatch(delPostModal()) }><button className='btn'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PopupPost
