import { push } from 'connected-react-router'
import { clearError } from '../'

const actionHelper = (dispatch, data, action_type, err_func) => {
    if (data.status === 'error') {
        if (data.statusCode === 500) {
            dispatch(push('/500'))
        }

        if (data.statusCode === 404) {
            dispatch(push('/404'))
        }

        dispatch(err_func(data.error))
    }
    
    if (data.status === 'ok') {
        dispatch({
            type: action_type,
            payload: data.data
        })
        dispatch(clearError())
    }
}

export default actionHelper