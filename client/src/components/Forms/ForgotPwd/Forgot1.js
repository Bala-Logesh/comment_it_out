import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { forgotPwdOtp } from '../../../redux'
import '../Form.css'

const Forgot1 = () => {
    const dispatch = useDispatch()
    const { forgot } = useSelector(state => state.err)

    const { email } = useParams()
    const [error, setError] = useState(forgot)
    const [otp, setOtp] = useState('')

    useEffect(() => {
        setError(forgot)
    }, [forgot])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(forgotPwdOtp(email, otp))
    }

    return (
        <div className='form flex' style={{ alignItems: 'center' }}>
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
