const ErrorResponse = require('../utils/errorResponse');
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  //log to console for dev
  console.log(err);

  //mongoose bad object ID
  if (err.name === 'CastError') {
    const message = `Resource not found with Id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  //mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error',
  });

  next();
};

module.exports = errorHandler;
