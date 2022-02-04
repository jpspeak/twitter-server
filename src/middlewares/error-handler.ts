import { ErrorRequestHandler } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

const errorHandler: ErrorRequestHandler = (error, _, res) => {
  console.log("errrror handler");
  //JWT error
  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({
      message: error.message
    });
  }
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
      errors: error.errors
    });
  }
  res.status(500).json({
    message: "Something went wrong!"
  });
};

export default errorHandler;
