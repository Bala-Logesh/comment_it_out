import { push } from 'connected-react-router'
import { clearError, setLoading, logoutUser } from '../'

const actionHelper = (dispatch, data, action_type, err_func, push_loc, after_fn = null) => {
    
    if (data.status === 'error') {
        if (data.statusCode === 500) {
            dispatch(push('/500'))
        }

        if (data.statusCode === 404) {
            dispatch(push('/404'))
        }

        if (data.statusCode === 403 || data.error === 'jwt expired') {
            data.error = 'Session expired. Please login again'
            dispatch(logoutUser())
            dispatch(push('/login'))
        }

        dispatch(setLoading())
        dispatch(err_func(data.error))
        return
    }
    
    if (data.status === 'ok') {
        dispatch({
            type: action_type,
            payload: data.data
        })

        dispatch(setLoading())
        dispatch(clearError())
        after_fn && after_fn(dispatch)
        push_loc && dispatch(push(`/${push_loc}`))
    }
}

export default actionHelper