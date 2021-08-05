import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import avatar_default from '../../images/avatar_default.png'
import './Form.css'

const SuggestedUser = () => {
    const { user } = useSelector(state => state.auth)
    
    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>User details</h2>
                {(user?.profilePic !== '') ? <img src={user?.profilePic} alt='Avatar' /> : <img src={avatar_default} alt='Avatar' />}
                <form className='form__form flex' autoComplete='off'>
                    <div className="form__labels flex">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' value={user?.username} disabled />
                    </div>
                    <div className="form__labels flex">
                        <label htmlFor="displayName">Display Name</label>
                        <input type="text" name='displayName' value={user?.displayName} disabled />
                    </div>
                    <div className="form__labels flex">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={user?.email} disabled />
                    </div>
                    <br />
                    <div className="form__buttons flex">
                        <Link to='/123/settings'><button className='btn' type="submit">Follow user</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SuggestedUser
