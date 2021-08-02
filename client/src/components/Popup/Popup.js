import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Popup.css'

const Popup = () => {
    const [modal, setModal] = useState(true)
    
    const closeModal = (e) => {
        if (e.target.id === 'popup') {
            setModal(false)
        }
    }

    return (
        <div className={ modal ? 'Popup flex' : 'hide-popup' } id='popup' onClick={ closeModal }>
            <div className="Popup__container flex">
                <h2>Are you sure to logout?</h2>
                <div className="Popup__buttons flex">
                    <button className='btn' type="submit">Logout</button>
                    <Link to='/home' onClick={ () => setModal(false) }><button className='btn'>Cancel</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Popup
