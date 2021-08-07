import { useSelector } from 'react-redux'
import Post from '../Post/Post'
import './Posts.css'

const Posts = ({ filteredPosts = [], onlyFiltered = false }) => {
    const { posts } = useSelector(state => state.post)
    const { users } = useSelector(state => state.user)
    
    let dispPosts = []
    
    if (onlyFiltered) {
        dispPosts = filteredPosts
    } else if (!onlyFiltered) {
        dispPosts = posts
    }

    return (
        <div className='Posts flex'>
            {
                (dispPosts?.length !== 0) ? (
                    dispPosts?.map(post => <Post key={ post._id } post={ post } users={ users } />)
                ): (
                    <h1>No Posts to display</h1>
                )
            }
        </div>
    )
}

export default Posts
