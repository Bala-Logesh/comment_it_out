import './Comment.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Comment = ({ comment, users }) => {
    const commentUser = users?.find(user => user._id === comment.commentor)

    return (
        <div className='Comment flex'>
            <div className="flex">
                <h5>{ commentUser?.username }</h5>
                <h5><EditIcon /></h5>
                <h5><DeleteIcon /></h5>
            </div>
            <p>{ comment.body }</p>
        </div>
    )
}

export default Comment
