import { useState } from "react"
import { useSelector } from "react-redux"
import Posts from '../Posts/Posts'
import './UserPosts.css'

const UserPosts = () => {
    const auth = useSelector(state => state.auth)
    const { posts } = useSelector(state => state.post)

    const [visibility, setVisibility] = useState('all')

    let filteredPosts = []

    filteredPosts = posts?.filter(post => post.user === auth.user._id)

    if (visibility === 'public') {
        filteredPosts = filteredPosts?.filter(post => post.status === 'public')
    } else if (visibility === 'private') {
        filteredPosts = filteredPosts?.filter(post => post.status === 'private')
    }

    return (
        <div className='UserPosts flex'>
            <div className="UserPosts__filter flex">
                <button onClick={() => setVisibility('all') } className={ visibility === 'all' ? 'active' : null }>All Posts</button>
                <button onClick={() => setVisibility('public') } className={ visibility === 'public' ? 'active' : null }>Public Posts</button>
                <button onClick={() => setVisibility('private') } className={ visibility === 'private' ? 'active' : null }>Private Posts</button>
            </div>
            <div className="UserPosts__posts flex">
                <Posts filteredPosts={ filteredPosts } onlyFiltered={ true } />
            </div>
        </div>
    )
}

export default UserPosts
