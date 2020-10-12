// Set up MySQL connection.
var mysql = require("mysql");
const { connect } = require("../controllers/burgers_controller");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqJ@ckp0t!',
    database: 'burgers_db'

  });
};
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "mysqJ@ckp0t!",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
