class GeneralMiddleware {
  static ErrorHandler(error, req, res, next) {
    if ('getType' in error) {
      return res.status(error.statusCode).json({
        status: "error",
        name: error.name,
        statusCode: error.statusCode,
        timestamp: Date.now(), 
        ...(['prod', 'test'].includes('development') ? { message: error.message, stack: error.stack} : { mesage: error.message})
      });
    }

    return res.status(500).json({
      status: 'error',
      name: 'InternalServerError',
      statusCode: 500,
      timestamp: Date.now(),
      message: "Something went wrong. Please contack our Support Team!"
    });
  }

  static NotFoundHandler(req, res, next) {
    return res.status(404).json({
      status: 'error',
      name: 'NotFoundError',
      statusCode: 404,
      timestamp: Date.now(),
      message: `${req.url} endpoint Not Found!`
    });
  }

  static DevLog(req, _res, next) {
    console.log(`requesting - ${req.method} ${req.url}`);
    return next();
  }
}

exports.GeneralMiddleware = GeneralMiddleware;