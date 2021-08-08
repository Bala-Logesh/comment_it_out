import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../../redux';
import './Comment.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Comment = ({ comment, users, user, post, setEditCmnt }) => {
    const dispatch = useDispatch()
    
    const commentUser = users?.find(user => user._id === comment.commentor)

    return (
        <div className='Comment flex'>
            <div className="flex">
                <h5>{ commentUser?.username }</h5>
                {(user?._id === commentUser?._id) ? <h5 className='edit' onClick={() => setEditCmnt(comment) }><EditIcon /></h5> : null }
                {((post.user === user?._id) || (user._id === commentUser?._id)) ? <h5 className='red' onClick={() => dispatch(deleteComment(post._id, comment._id)) }><DeleteIcon /></h5> : null }
            </div>
            <p>{ comment.body }</p>
        </div>
    )
}

export default Comment
