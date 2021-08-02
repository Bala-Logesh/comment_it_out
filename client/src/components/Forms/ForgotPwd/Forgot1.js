import { useState } from 'react'
import '../Form.css'

const Forgot1 = () => {
    const error = null
    const [otp, setOtp] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(otp)
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Reset your password</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    { error && <div className="error">{ error }</div> }
                    <input type="text" name='otp' placeholder='Enter the OTP' value={ otp } onChange={ e => setOtp(e.target.value) } />
                    <button className='btn' type="submit">Verify the OTP</button>
                </form>
            </div>
        </div>
    )
}

export default Forgot1
