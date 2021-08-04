import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import ImageIcon from '@material-ui/icons/Image';
import FileBase from 'react-file-base64'
import './Form.css'

const EditUser = () => {
    const auth = useSelector(state => state.auth)
    const { editUser } = useSelector(state => state.err)

    const [error, setError] = useState(editUser)
    const [user, setUser] = useState(auth.user)

    useEffect(() => {
        setError(editUser)
    }, [editUser])

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (user.displayName.length > 2) {
            return setError('Display Name cannot be more than 2 characters long')
        }
        if (user.password && user.password !== user.confirmPassword) {
            return setError('Passwords do not match')
        }

        console.log(user);
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
                            onDone={(file) => { setUser({ ...user, selectedFile: file.base64 }); alert(`File uploaded successfully - ${ file.name }`) }}
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


