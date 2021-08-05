import ErrorResponse from '../utils/errorResponse.js'

const errorHandler = (err, req, res, next) => {
  // console.log(err);

  let error = { ...err }

  error.message = err.message

  error = new ErrorResponse(err.message || 'Internal Server Error', err.statusCode || 500)
   
  res.json({
    statusCode: error.statusCode,
    status: 'error',
    data: null,
    error: error.message
  })
}

export default errorHandler