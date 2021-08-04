import { push } from 'connected-react-router'
import { clearError, setLoading, logoutUser } from '../'

const actionHelper = (dispatch, data, action_type, err_func) => {
    console.log(data);
    if (data.status === 'error') {
        if (data.statusCode === 500) {
            dispatch(push('/500'))
        }

        if (data.statusCode === 404) {
            dispatch(push('/404'))
        }

        if (data.statusCode === 403) {
            dispatch(logoutUser())
            dispatch(push('/login'))
        }

        dispatch(setLoading())
        dispatch(err_func(data.error))
    }
    
    if (data.status === 'ok') {
        dispatch({
            type: action_type,
            payload: data.data
        })

        dispatch(setLoading())
        dispatch(clearError())
    }
}

export default actionHelper