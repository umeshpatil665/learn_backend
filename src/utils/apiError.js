class apiError extends Error {
    constructor(
        statusCode,
      message = "something went wrong",
     
      errors = [],
      statck
    ) {
      super(message); // Ab sahi hai, kyunki hum Error class extend kar rahe hain
      this.message = message;
      this.data = null;
      this.errors = errors; // Correct assignment
      this.success = false;
      this.statusCode = statusCode;
  
      if (statck) {
        this.statck = statck;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { apiError };
  