import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, delPostModal } from '../../redux'
import './Popup.css'

const PopupPost = () => {
    const { post, id } = useSelector(state => state.misc)

    const dispatch = useDispatch()
    
    const closeModal = (e) => {
        if (e.target.id === 'popup') {
            dispatch(delPostModal())
        }
    }

    const delPostFn = () => {
        dispatch(deletePost(id))
        dispatch(delPostModal())
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
