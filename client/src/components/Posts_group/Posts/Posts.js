import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
    return (
        <div className='Posts flex'>
            {/* <h1>No Posts to display</h1> */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts