const responseHandler = (req, res, next) => {
    res.status(200).json({
        statusCode: 200,
        status: 'ok',
        data: res.data,
        error: null
    })
}

export default responseHandler