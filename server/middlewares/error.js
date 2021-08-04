const errorMiddleware = (err, req, res, next) => {
  // console.log(err.message, err.status, err.statusCode);
  res.json({
    status: err.status,
    data: null,
    error: err.message
  })
}

export default errorMiddleware