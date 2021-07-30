const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const { json } = require("express");

const db = require("./db/db");
const errorHandler = require("./middleware/error");

// import route files
const routes = require("./routes/song");
// App config
dotenv.config({
  path: "config/.env",
});
// Initialize app
const app = express();
app.use(cors());
app.use(json());
// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connect to Database
db();
// Mount routers
app.use("/api/", routes);

app.use(errorHandler);

const PORT = process.env.PORT;

// Listen on HTTP
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.red
  );
});
