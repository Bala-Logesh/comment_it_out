import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { forgotPwdEmail } from '../../../redux'
import '../Form.css'

const Forgot = () => {
    const dispatch = useDispatch()
    const { forgot } = useSelector(state => state.err)
    const [error, setError] = useState(forgot)
    const [email, setEmail] = useState('')

    useEffect(() => {
        setError(forgot)
    }, [forgot])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(forgotPwdEmail(email))
    }

    return (
        <div className='form flex' style={{ alignItems: 'center' }}>
            <div className="form__container flex">
                <h2>Reset your password</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    { error && <div className="error">{ error }</div> }
                    <input type="email" name='email' placeholder='Enter the email' value={ email } onChange={ e => setEmail(e.target.value) } />
                    <button className='btn' type="submit">Get an OTP</button>
                </form>
                <div className="form__links">
                    <h3><Link to='/login'><span>Click here</span></Link> to login as an existing user</h3>
                    <br />
                    <h3><Link to='/signup'><span>Click here</span></Link> to register as a new user</h3>
                </div>
            </div>
        </div>
    )
}

export default Forgot
