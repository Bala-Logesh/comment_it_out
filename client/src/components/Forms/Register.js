import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../redux";
import ImageIcon from '@material-ui/icons/Image';
import FileBase from 'react-file-base64'
import './Form.css'

const Register = () => {
    const dispatch = useDispatch()
    const { register } = useSelector(state => state.err)
    
    const [error, setError] = useState(register)
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        profilePic: ''
    })

    useEffect(() => {
        setError(register)
    }, [register])

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (user.username === '') {
            return setError('Username cannot be empty')
        }
        if (user.displayName === '') {
            return setError('Display Name cannot be empty')
        }
        if (user.displayName.length > 2) {
            return setError('Display Name cannot be more than 2 characters long')
        }
        if (user.email === '') {
            return setError('Email cannot be empty')
        }
        if (user.password === '' || user.confirmPassword === '') {
            return setError('Password cannot be empty')
        }
        if (user.password !== user.confirmPassword) {
            return setError('Passwords do not match')
        }

        dispatch(registerUser(user))
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
                    <label className="form__file flex">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(file) => { setUser({ ...user, profilePic: file.base64 }); alert(`File uploaded successfully - ${ file.name }`) }}
                        />
                        <p>Upload a Profile Picture</p>
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
