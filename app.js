// In a Node.js project, "app.js" is the main file that starts your application
// and contains the initial setup and primary code.

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const connection = require("./database/mysqlDB");

const app = express();

// database init
function mysqlConnect() {
  global.connection = mysql.createPool({
    connectionLimit: 10, // adjust as needed
    host: connection.host,
    user: connection.user,
    password: connection.password,
    database: connection.database,
  });

  global.connection.on("error", function (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("Reconnecting to database...");
      mysqlConnect(); // Reconnect on lost connection
    } else {
      throw err;
    }
  });

  console.log("Connected to database");
}

mysqlConnect();

// Routes
const userRoutes = require("./routes/user");

app.use("/api", userRoutes);

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Define a root route
app.get("/", (req, res) => {
  res.send("Hello, this is the root route!");
});

// Routes
app.use("/api", userRoutes);

// PORT
const port = process.env.PORT || 3000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
