import IndUser from "../IndUser/IndUser"
import './Following.css'

const Following = () => {
    const visibility = 'followers'

    return (
        <div className='Following flex'>
            <div className="Following__filter flex">
                <button className={ visibility === 'followers' ? 'active' : null }>Followers</button>
                <button className={ visibility === 'following' ? 'active' : null }>Following</button>
            </div>
            <div className='Following__users flex'>
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
                <IndUser />
            </div>
        </div>
    )
}

export default Following
