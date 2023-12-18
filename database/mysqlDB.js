"use strict";

// MySQL connection credentials are written in a file that we can use to connect
// our project to a MySQL database.

// Install MySQL in your project and require it.

const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 10, // adjust as needed
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 3306,
  database: "crud",
});

module.exports = connection;
