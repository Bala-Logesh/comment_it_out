import { useState } from 'react'
import '../css/Popup.css'

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
                Happy popup
            </div>
        </div>
    )
}

export default Popup
