import Posts from './Posts'
import '../css/UserPosts.css'

const UserPosts = () => {
    const visibility = 'public'
    return (
        <div className='UserPosts flex'>
            <div className="UserPosts__filter flex">
                <button className={ visibility === 'all' ? 'active' : null }>All Posts</button>
                <button className={ visibility === 'public' ? 'active' : null }>Public Posts</button>
                <button className={ visibility === 'private' ? 'active' : null }>Private Posts</button>
            </div>
            <div className="UserPosts__posts flex">
                <Posts />
            </div>
        </div>
    )
}

export default UserPosts
