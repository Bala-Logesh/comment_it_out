import { useState } from "react"
import { Link } from 'react-router-dom'
import ImageIcon from '@material-ui/icons/Image';

const Register = () => {
    const error = null
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    })

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(user);
        setUser({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        })
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Signup as new user</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    {error && <div className="error">{ error }</div> }
                    <input type="text" name='username' placeholder='Enter the username' value={user.username} onChange={handleInput} />
                    <input type="text" name='displayName' placeholder='Enter a 2 letter display name' value={user.displayName} onChange={handleInput} />
                    <input type="email" name='email' placeholder='Enter the email' value={user.email} onChange={handleInput} />
                    <input type="password" name='password' placeholder='Enter the password' value={user.password} onChange={handleInput} />
                    <input type="password" name='confirmPassword' placeholder='Reenter the password' value={user.confirmPassword} onChange={handleInput} />
                    <label class="form__file flex">
                        <input type="file"/>
                        Upload a Profile Picture
                        <ImageIcon />
                    </label>
                    <button className='btn' type="submit">SignUp</button>
                </form>
                <div className="form__links">
                    <h3><Link to='/login'><span>Click here</span></Link> to login as an existing user</h3>
                    <br />
                    <h3>Forgot your password, <Link to='/forgot'><span>Click here</span></Link> to reset it</h3>
                </div>
            </div>
        </div>
    )
}

export default Register
