// Any type of errors thrown from backend
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = 'error'  
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// 500 - Internal Server Error
export class IntServerError extends Error {
  constructor() {
    super('Internal Server Error');

    this.statusCode = 500;
    this.status = 'error' 
    
    Error.captureStackTrace(this, this.constructor);
  }
}