import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { editUser } from '../../redux'
import ImageIcon from '@material-ui/icons/Image';
import FileBase from 'react-file-base64'
import './Form.css'

const EditUser = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { user: userErr } = useSelector(state => state.err)

    const [error, setError] = useState(userErr)
    const [user, setUser] = useState({
        username: auth.user.username,
        email: auth.user.email,
        password: '',
        confirmPassword: '',
        displayName: auth.user.displayName,
        profilePic: auth.user.profilePic || ''
    })

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
        if (user.password && user.password !== user.confirmPassword) {
            return setError('Passwords do not match')
        }

        const newUser = {
            ...user
        }

        newUser.displayName = newUser.displayName.toUpperCase()
        newUser.password = auth.user.password

        dispatch(editUser(auth.user._id, newUser))
    }

    return (
        <div className='form flex'>
            <div className="form__container flex">
                <h2>Edit your details</h2>
                <form onSubmit={ handleSubmit } className='form__form flex' autoComplete='off'>
                    {error && <div className="error">{error}</div>}
                    <input type="text" name='username' placeholder='Enter the username' value={user?.username} onChange={handleInput} />
                    <input type="text" name='displayName' placeholder='Enter a 2 letter display name' value={user?.displayName} onChange={handleInput} />
                    <input type="email" name='email' placeholder='Enter the email' value={user?.email} onChange={handleInput} />
                    <input type="password" name='password' placeholder='Enter the password' value={user?.password} onChange={handleInput} />
                    <input type="password" name='confirmPassword' placeholder='Reenter the password' value={user?.confirmPassword} onChange={handleInput} />
                    <label className="form__file flex">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(file) => { setUser({ ...user, profilePic: file.base64 }); alert(`File uploaded successfully - ${ file.name }`) }}
                        />
                        <p>Upload a different Profile Picture</p>
                        <ImageIcon />
                    </label>
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


