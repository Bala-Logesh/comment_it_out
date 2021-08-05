import { useSelector } from 'react-redux'
import './Loading.css'

const Loading = () => {
    const { loading } = useSelector(state => state.misc)
    
    return (
        <div className={loading ? 'Loading flex' : 'hidden'}>
            <div className="Loader"></div>
        </div>
    )
}

export default Loading
