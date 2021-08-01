import { useState } from "react"
import { Link } from "react-router-dom"

const EditUser = () => {
    const error = null
    const [user, setUser] = useState({
        username: 'Bala',
        email: 'bala@gmail.com',
        password: '',
        confirmPassword: '',
        displayName: 'BL'
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
                <h2>Edit your details</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    {error && <div className="error">{error}</div>}
                    <input type="text" name='username' placeholder='Enter the username' value={user.username} onChange={handleInput} />
                    <input type="text" name='displayName' placeholder='Enter a 2 letter display name' value={user.displayName} onChange={handleInput} />
                    <input type="email" name='email' placeholder='Enter the email' value={user.email} onChange={handleInput} />
                    <input type="password" name='password' placeholder='Enter the password' value={user.password} onChange={handleInput} />
                    <input type="password" name='confirmPassword' placeholder='Reenter the password' value={user.confirmPassword} onChange={handleInput} />
                    <br />
                    <div className="form__buttons flex">
                        <button className='btn' type="submit">Save Changes</button>
                        <Link to='/home'><button className='btn'>Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser
