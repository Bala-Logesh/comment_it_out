import { useSelector } from 'react-redux'
import IndUser from '../Users_group/IndUser/IndUser'
import './UserSuggestions.css'

const UserSuggestions = () => {
    const { users } = useSelector(state => state.user)
    const auth = useSelector(state => state.auth)

    const filteredUsers = users?.filter(user => user._id !== auth.user._id)
    
    return (
        <div className='UserSuggestions flex'>
            <h2>Suggested Users</h2>
            {
                (filteredUsers?.length !== 0) && filteredUsers?.map(induser => <IndUser key={induser._id} induser={induser} auth={auth} />)
            }
        </div>
    )
}

export default UserSuggestions
