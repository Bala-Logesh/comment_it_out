import '../css/Post.css'
import img from '../images/img.png'

const Post = () => {
    return (
        <div className='Post flex'>
            <img src={img} alt='Post'></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates possimus provident sed aliquam porro</p>
        </div>
    )
}

export default Post
