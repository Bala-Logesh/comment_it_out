import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Posts from '../../Posts_group/Posts/Posts'
import './SuggestedUserDetails.css'

const SuggestedUserDetails = () => {
    const { users } = useSelector(state => state.user)
    const { posts } = useSelector(state => state.post)
    
    const { id } = useParams()
    
    const currUser = users.find(user => user._id === id)
    const filteredPosts = posts.filter(post => post.user === id)

    return (
        <div className='SuggestedUser flex'>
            <h2>Posts of { currUser.username }</h2>
            <Posts filteredPosts={filteredPosts} onlyFiltered={true} />
        </div>
    )
}

export default SuggestedUserDetails
