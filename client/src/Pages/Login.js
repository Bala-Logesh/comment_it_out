import { useState } from "react"
import { Link } from 'react-router-dom'
import '../css/Form.css'

const Login = () => {
    const error = null
    const [user, setUser] = useState({
        email: '',
        password: ''
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
            email: '',
            password: ''
        })
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Login as existing user</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    { error && <div className="error">{ error }</div> }
                    <input type="email" name='email' placeholder='Enter the email' value={user.email} onChange={handleInput} />
                    <input type="password" name='password' placeholder='Enter the password' value={user.password} onChange={handleInput} />
                    <button className='btn' type="submit">Login</button>
                </form>
                <div className="form__links">
                    <h3><Link to='/signup'><span>Click here</span></Link> to register as a new user</h3>
                    <br />
                    <h3>Forgot your password, <Link to='/forgot'><span>Click here</span></Link> to reset it</h3>
                </div>
            </div>
        </div>
    )
}

export default Login
