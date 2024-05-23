const { StatusCodes } = require('http-status-codes');
const { ApiError } = require('../../core/apiError');

class BadRequestError extends ApiError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

class AuthenticationError extends ApiError {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

class AuthorizationError extends ApiError {
  constructor(message) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

class ResourceConflictError extends ApiError {
  constructor(message) {
    super(message, StatusCodes.CONFLICT);
  }
}

class ValidationError extends ApiError {
  constructor(message, errors = []) {
    super(message, StatusCodes.UNAUTHORIZED);
    this.errors = errors;
  }
}

module.exports = {
  BadRequestError,
  AuthenticationError, 
  AuthorizationError,
  ResourceConflictError,
  NotFoundError,
  ValidationError,
}