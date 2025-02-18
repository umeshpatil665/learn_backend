class apiError {
  constructor(
    message = "something went wrong",
    statusCode,
    errors = [],
    statck
  ) {
    supper(message);
    this.message = message;
    this.data = null;
    this.errors = this.errors;
    this.success = false;
    this.statusCode = statusCode;

    if (statck) {
      this.statck = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export {apiError}