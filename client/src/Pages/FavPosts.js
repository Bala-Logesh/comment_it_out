import Posts from './Posts'
import '../css/FavPosts.css'

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
