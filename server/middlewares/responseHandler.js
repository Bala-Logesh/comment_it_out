const responseHandler = (req, res, next) => {
    res.status(res.statusCode || 200).json({
        statusCode: res.statusCode || 200,
        status: 'ok',
        data: res.data,
        error: null
    })
}

export default responseHandler