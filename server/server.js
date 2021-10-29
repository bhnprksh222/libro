const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("Shutting down the server and application");
  console.log(err.name, err.message);
  console.log(err);
  process.exit(1);
});

dotenv.config({
  path: path.join(__dirname, "config.env"),
});
console.log("Mode =>", process.env.NODE_ENV);

const app = require("./app.js");

const mongoDbUrl = process.env.MONGO_DATABASE_URL.replace(
  "<password>",
  process.env.MONGO_DATABASE_PASSWORD
);
mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("the Mongo DB is connected successfully");
  })
  .catch((err) => {
    console.log(err);
    console.log("error in DB connection");
  });

const port = process.env.PORT || 8080;
//as we are not explicitly creating a server using http.createServer, we listen to the app directly
const server = app.listen(port, () => {
  console.log(`the port ${port} is listening`);
});

process.on("unhandledRejection", (err) => {
  console.log("Shutting down the server");
  console.log(err.name, err.message);
  console.log(err);
  server.close(() => {
    console.log("Shutting down the application");
    process.exit(1);
  });
});
