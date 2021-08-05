import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NoAuthRoute({ component: Component, ...rest }){
    const { user } = useSelector(state => state.auth)
    
    return (
        <Route 
            { ...rest }
            render = { props => 
                user ? <Redirect to='/home' /> : <Component { ...props } />
            }
        />
    )
}

export default NoAuthRoute