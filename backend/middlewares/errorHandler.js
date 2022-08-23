const {BadRequestError} = require("../customErrors");

module.exports = (err, req, res, next) => {
  if (err.name === "CastError") {
    const message = `Resource not found invalid: ${err.path}`;
    err = new BadRequestError(message);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    err = new BadRequestError(message);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Дотоод серверийн алдаа",
  });
};
