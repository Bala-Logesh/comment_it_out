import { useSelector } from "react-redux"
import Posts from '../../Posts_group/Posts/Posts'
import './FavPosts.css'

const FavPosts = () => {
    const { posts } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth)

    const displayPosts = posts?.filter(post => post.likes.includes(user?._id))
    
    return (
        <div className='FavPosts flex'>
            <div className="FavPosts__posts flex">
                <Posts filteredPosts={ displayPosts } onlyFiltered={ true } />
            </div>
        </div>
    )
}

export default FavPosts
