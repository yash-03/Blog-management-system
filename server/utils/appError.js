class AppError extends Error {
  constructor(err) {
    super(err.message);
    this.errors = {
      name: err.name,
      message: err.message,
      stack: err.stack,
    };
  }
}
module.exports = AppError;
