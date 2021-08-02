import Posts from '../../Posts_group/Posts/Posts'
import './FavPosts.css'

const FavPosts = () => {
    return (
        <div className='FavPosts flex'>
            <div className="FavPosts__posts flex">
                <Posts />
            </div>
        </div>
    )
}

export default FavPosts
