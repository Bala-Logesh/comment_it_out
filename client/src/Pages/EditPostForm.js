import { useState } from "react"
import { Link } from "react-router-dom"

const EditPostForm = () => {
    const error = null
    const [post, setPost] = useState({
        title: 'Post 1',
        subtitle: 'Post 1 Subtitle',
        body: 'Post 1 Body',
        status: 'public'
    })

    const handleInput = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(post);
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Create a new post</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    {error && <div className="error">{ error }</div> }
                    <input type="text" name='title' placeholder='Enter the title' value={post.title} onChange={handleInput} />
                    <input type="title" name='subtitle' placeholder='Enter the subtitle' value={post.subtitle} onChange={handleInput} />
                    <textarea type="text" rows="6" name="body" placeholder='Enter the body' value={post.body} onChange={handleInput} />
                    <div className="form__radio flex">
                        <h4>Choose visibility</h4>
                        <div className="flex">
                            <input type="radio" id="public" name="status" value="public" checked={ post.status === 'public' } onChange={ handleInput }/>
                            <label htmlFor="public">Public</label>
                            <br />
                        </div>
                        <div className="flex">
                            <input type="radio" id="private" name="status" value="private" checked={ post.status === 'private' } onChange={ handleInput }/>
                            <label htmlFor="private">Private</label>
                            <br />
                        </div>
                    </div>
                    <br />
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
