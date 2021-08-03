import { Link } from "react-router-dom"
import avatar from '../../images/avatar.jpg'
import './Form.css'

const UserDetails = () => {
    const user = {
        username: 'Bala',
        email: 'bala@gmail.com',
        password: '',
        confirmPassword: '',
        displayName: 'BL',
        selectedFile: avatar
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>User details</h2>
                <img src={ user.selectedFile } alt='Avatar' />
                <form className='form__form flex' autoComplete='off'>
                    <div className="form__labels flex">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' value={user.username} disabled />
                    </div>
                    <div className="form__labels flex">
                        <label htmlFor="displayName">Display Name</label>
                        <input type="text" name='displayName' value={user.displayName} disabled />
                    </div>
                    <div className="form__labels flex">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={user.email} disabled />
                    </div>
                    <br />
                    <div className="form__buttons flex">
                        <Link to='/123/settings'><button className='btn' type="submit">Edit Details</button></Link>
                        <Link to='/home'><button className='btn'>Delete Account</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserDetails
