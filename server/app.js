const express = require("express");
const path = require("path");

const logger = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const passport = require("passport");
const compression = require("compression");
const cors = require("cors");

const clubRouter = require("./routes/clubRoutes");
const globalErrorHandler = require("./controllers/errorControllers");

const app = express();

// Middleware functions

//Logging middleware function
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

//Setting up HTTP headers
// we need to explicitly set the option of content security policy to false to use the mapbox script
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

//Setting up rate limiter middleware
const limiter = rateLimit({
  //number of max requests made
  max: 50,
  //time limit for these requests
  //windowMs: 60 * 60 * 1000,
  windowMs: 60 * 60,
  //error message
  message: "Too many attempts from the same IP. Please try again later",
});
app.use(limiter);

//Body-parser middleware functions
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Data sanitizaton against NOSQL query injection attacks
app.use(mongoSanitize());

//Data sanitizaton against XSS attacks
app.use(xss());

//Prevent paramter pollution
// NOTE: Need to change this accordingly
app.use(
  hpp({
    whitelist: [
      "finalPrice",
      "originalPrice",
      "savingPrice",
      "fullName",
      "description",
      "technicalDetails",
      "additionalDetails",
      "imageArr",
    ],
  })
);

//Compression
app.use(compression());

//Custom middleware function
app.use((req, res, next) => {
  console.log("this is the middleware function talking");
  next();
});

app.use("/api/v1/clubs", clubRouter);

// error handler
app.all(
  "*",
  (req, res, next) => {
    res.status(404).json({
      status: "error",
      message: `the route ${req.originalUrl} is not defined`,
    });
  }
  // res.status(404).render("errorTemplate", () => {
  //   next(new AppError(404, `the route ${req.originalUrl} is not defined`));
  // });
);

//Global error handler
app.use(globalErrorHandler);

module.exports = app;
