import { useState } from "react"
import '../Form.css'

const Forgot2 = () => {
    const error = null
    const [user, setUser] = useState({
        password: '',
        confirmPassword: ''
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
