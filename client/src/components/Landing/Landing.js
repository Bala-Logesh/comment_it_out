import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Landing.css'

const Landing = () => {
    const history = useHistory()
    const { user } = useSelector(state => state.auth)

    if (user) {
        history.push('/home')
    }

    return (
        <div className='Landing flex'>
            <div className="Landing__main flex">
                <h1>Welcome to</h1>
                <h1>&#47;&#47;Comment_It_Out</h1>
            </div>
            <div className="Landing__footer">
                <h4>Designed and Developed by Bala Logesh in 2021</h4>
            </div>
        </div>
    )
}

export default Landing
