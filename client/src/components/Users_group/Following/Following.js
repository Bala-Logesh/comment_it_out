import { useState } from "react"
import { useSelector } from "react-redux"
import IndUser from "../IndUser/IndUser"
import './Following.css'

const Following = () => {
    const auth = useSelector(state => state.auth)
    const { users } = useSelector(state => state.user)

    const [follow, setFollow] = useState('followers')

    let userArray = []

    if (follow === 'followers') {
        userArray = auth.user.following.map(induser => users.find(user => user._id === induser))
    } else {
        userArray = users.filter(induser => induser.following.includes(auth.user._id))
    }

    return (
        <div className='Following flex'>
            <div className="Following__filter flex">
                <button onClick={() => setFollow('followers') } className={ follow === 'followers' ? 'active' : null }>Followers</button>
                <button onClick={() => setFollow('following') } className={ follow === 'following' ? 'active' : null }>Following</button>
            </div>
            <div className='Following__users flex'>
                {
                    (userArray === []) ?
                        follow === 'followers' ? <h2>No followers</h2> : <h2>No following users</h2>
                    : (
                        userArray?.map(induser => <IndUser key={induser._id} induser={induser} auth={auth} />)
                    )
                }
            </div>
        </div>
    )
}

export default Following
