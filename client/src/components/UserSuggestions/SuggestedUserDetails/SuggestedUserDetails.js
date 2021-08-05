import Posts from '../../Posts_group/Posts/Posts'
import './SuggestedUserDetails.css'

const SuggestedUserDetails = () => {
    return (
        <div className='SuggestedUser flex'>
            <h2>Posts of user</h2>
            <Posts />
        </div>
    )
}

export default SuggestedUserDetails
