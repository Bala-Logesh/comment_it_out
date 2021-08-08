import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { createComment, editComment } from "../../../../../redux";
import SendIcon from '@material-ui/icons/Send';
import './CommentForm.css'

const CommentForm = ({ post, user, setEditCmnt, editCmnt = null }) => {
    const dispatch = useDispatch() 

    const [comment, setComment] = useState('')

    useEffect(() => {
        editCmnt && setComment(editCmnt?.body)
    }, [editCmnt, editCmnt?.body])

    const handleSubmit = e => {
        e.preventDefault()

        if (comment !== '') {
            if (editCmnt) {
                dispatch(editComment(post._id, editCmnt._id, comment))
                setEditCmnt(null)
            } else {
                const comm = {
                    body: comment,
                    commentor: user._id
                }
                dispatch(createComment(post._id, comm))
            }
            setComment('')
        }
    }

    return (
        <div className='CommentForm flex'>
            <form onSubmit={ handleSubmit } className='CommentForm__form flex' autoComplete='off'>
                <input type="text" name='comment' placeholder='Enter your comment' value={comment} onChange={e => setComment(e.target.value)} />
                <button className='CommentForm__search flex' type='submit'><SendIcon /></button>
            </form>
        </div>
    )
}

export default CommentForm
