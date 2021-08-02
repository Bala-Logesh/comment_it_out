import { useState } from "react"
import SendIcon from '@material-ui/icons/Send';
import './CommentForm.css'

const CommentForm = () => {
    const [comment, setComment] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(comment);
        setComment('')
    }

    return (
        <div className='CommentForm flex'>
            <form onSubmit={ handleSubmit } className='CommentForm__form flex' autoComplete='off'>
                <input type="text" name='comment' placeholder='Enter your comment' value={comment} onChange={e => setComment(e.target.value)} />
                <button className='CommentForm__search flex'><SendIcon /></button>
            </form>
        </div>
    )
}

export default CommentForm
