import IndUser from "../components/IndUser"
import '../css/UserSuggestions.css'

const UserSuggestions = () => {
    return (
        <div className='UserSuggestions flex'>
            <h2>Suggested Users</h2>
            <IndUser />
            <IndUser />
            <IndUser />
            <IndUser />
            <IndUser />
            <IndUser />
            <IndUser />
        </div>
    )
}

export default UserSuggestions
