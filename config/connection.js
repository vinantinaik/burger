var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}


connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
    }
    console.log("Connected as id  : ", connection.threadId);
});

module.exports = connection;