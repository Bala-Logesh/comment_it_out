import { Link } from 'react-router-dom'
import './ErrorPages.css'

const Page404 = () => {
    return (
        <div className='Error flex'>
            <div className="Error__main flex">
                <h1>404 Error :(</h1>
                <h2>Page not found</h2>
                <h3>
                    <Link to='/home'>Click here</Link> to go to the home page
                </h3>
            </div>
        </div>
    )
}

export default Page404
