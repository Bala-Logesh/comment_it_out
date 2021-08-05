import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { forgotPwdReset } from '../../../redux'
import '../Form.css'

const Forgot2 = () => {
    const dispatch = useDispatch()
    const { forgot } = useSelector(state => state.err)
    const auth = useSelector(state => state.auth)

    const { email } = useParams()
    const [error, setError] = useState(forgot)
    const [user, setUser] = useState({
        password: '',
        confirmPassword: ''
    })

    useEffect(() => {
        setError(forgot)
    }, [forgot])

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (user.password === '' || user.confirmPassword === '') {
            return setError('Password cannot be empty')
        }
        if (user.password !== user.confirmPassword) {
            return setError('Passwords do not match')
        }

        dispatch(forgotPwdReset(email, user.password, auth.forgot._id))
        setUser({
            password: '',
            confirmPassword: ''
        })
    }

    return (
        <div className='form flex' style={{ alignItems: 'center' }}>
            <div className="form__container flex">
                <h2>Reset your password</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    { error && <div className="error">{ error }</div> }
                    <input type="password" name='password' placeholder='Enter the password' value={ user.password } onChange={ handleInput } />
                    <input type="password" name='confirmPassword' placeholder='Reenter the password' value={ user.confirmPassword } onChange={ handleInput } />
                    <button className='btn' type="submit">Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default Forgot2
