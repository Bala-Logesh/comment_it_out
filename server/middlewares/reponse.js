const reponseMiddleware = (req, res, next) => {
  res.json({
    status: 'ok',
    data: res.data,
    error: null
  })
}

export default reponseMiddleware