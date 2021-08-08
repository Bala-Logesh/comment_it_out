import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { editPost } from "../../redux"
import FileBase from 'react-file-base64'
import ImageIcon from '@material-ui/icons/Image';
import './Form.css'

const EditPostForm = () => {
    const { posts } = useSelector(state => state.post)
    const { post: postErr } = useSelector(state => state.err)
    const dispatch = useDispatch()

    const { id } = useParams()

    const filteredPost = posts?.find(post => post._id === id)

    const [error, setError] = useState(postErr)
    const [post, setPost] = useState({
        title: filteredPost.title,
        subtitle: filteredPost.subtitle,
        tags: filteredPost.tags.join(','),
        body: filteredPost.body,
        status: filteredPost.status,
        image: filteredPost.image || ''
    })

    const handleInput = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (post.title === '') {
            return setError('Title cannot be empty')
        }
        if (post.subtitle === '') {
            return setError('Subtitle cannot be empty')
        }
        if (post.body === '' && post.image === '') {
            return setError('Enter a body or upload an image')
        }

        const newPost = {
            ...post,
            tags: post.tags.split(',')
        }

        dispatch(editPost(id, newPost))
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Edit the Post</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    {error && <div className="error">{ error }</div> }
                    <input type="text" name='title' placeholder='Enter the title' value={post.title} onChange={handleInput} />
                    <input type="title" name='subtitle' placeholder='Enter the subtitle' value={post.subtitle} onChange={handleInput} />
                    <input type="title" name='tags' placeholder='Enter the tags separated by commas' value={post.tags} onChange={handleInput} />
                    <textarea type="text" rows="6" name="body" placeholder='Enter the body' value={post.body} onChange={handleInput} />
                    <div className="form__radio flex">
                        <h4>Choose visibility</h4>
                        <div className="flex">
                            <label htmlFor="public"><input type="radio" id="public" name="status" value="public" checked={ post.status === 'public' } onChange={ handleInput }/>Public</label>
                        </div>
                        <div className="flex">
                            <label htmlFor="private"><input type="radio" id="private" name="status" value="private" checked={ post.status === 'private' } onChange={ handleInput }/>Private</label>
                        </div>
                    </div>
                    <label className="form__file flex">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(file) => { setPost({ ...post, image: file.base64 }); alert(`File uploaded successfully - ${file.name}`) }}
                        />
                        <p>Upload a image for the post</p>
                        <ImageIcon />
                    </label>
                    <div className="form__buttons flex">
                        <button className='btn' type="submit">Save Changes</button>
                        <Link to='/home'><button className='btn'>Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPostForm
