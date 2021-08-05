import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthRoute({ component: Component, ...rest }){
    const { user } = useSelector(state => state.auth)
    
    return (
        <Route 
            { ...rest }
            render = { props => 
                user ? <Component { ...props } /> : <Redirect to='/' />
            }
        />
    )
}

export default AuthRoute