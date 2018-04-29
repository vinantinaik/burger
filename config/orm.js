var connection = require('./connection.js');

var orm = {
    selectAll: function (tbl, col, val) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tbl, col, val], function (err, result) {
            if (err) throw err;
            console.log(result);

        })
    },

    insertOne: function (tbl, col1, col2, val1, val2) {
        var queryString = "INSERT INTO ?? (?? , ??) VALUES (? ,?)";
        connection.query(queryString, [tbl, col1, col2, val1, val2], function (err, result) {
            if (err) throw err;
            console.log("inserted row :", result.affectedRows);
        })
    },

    updateOne: function (tbl, col1, val1, col2, val2) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tbl, col1, val1, col2, val2], function (err, result) {
            if (err) throw err;
            console.log("Updated row :", result.changedRows);
        })
    }

}
module.exports = orm