import { useState } from 'react'
import '../Form.css'

const Forgot = () => {
    const error = null
    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Reset your password</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    { error && <div className="error">{ error }</div> }
                    <input type="email" name='email' placeholder='Enter the email' value={ email } onChange={ e => setEmail(e.target.value) } />
                    <button className='btn' type="submit">Get an OTP</button>
                </form>
            </div>
        </div>
    )
}

export default Forgot
