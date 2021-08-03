import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from "../../redux"
import './Form.css'

const Login = () => {
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.err)
    const auth = useSelector(state => state.auth)
    const history = useHistory()

    if (auth.user) {
        history.push('/home')
    }

    const [error, setError] = useState(login)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        setError(login)
    }, [login])

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (user.username === '') {
            return setError('Username/Email cannot be empty')
        }
        if (user.password === '') {
            return setError('Password cannot be empty')
        }

        dispatch(loginUser(user, history))
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Login as existing user</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    { error && <div className="error">{ error }</div> }
                    <input type="text" name='username' placeholder='Enter the username/email' value={user.username} onChange={handleInput} />
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
