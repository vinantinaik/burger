var connection = require('./connection.js');


var orm = {
    selectAll:  (tbl) => {
        return new Promise((resolve,reject)=>{
            var queryString = "SELECT * FROM ??";
            var data;
            connection.query(queryString, [tbl], function (err, result) {
                if (err){
                    console.error("ERROR: " + err.stack)
                    reject(err);
                   
                } 
                else{
                    resolve(result);
                }
                
        })
       
        })
    },

    insertOne:  (tbl, col1, col2, val1, val2) => {
        return new Promise((resolve,reject)=>{
            var queryString = "INSERT INTO ?? (?? , ??) VALUES (? ,?)";
            connection.query(queryString, [tbl, col1, col2, val1, val2], function (err, result) {
                if (err) {
                    console.error("ERROR: " + err.stack);
                    reject(err);

                }
                else
                {
                    resolve(result.affectedRows);

                }
            })
        })
       
    },

    updateOne:  (tbl, col1, val1, col2, val2) =>{
        return new Promise((resolve,reject)=>{
            var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
            connection.query(queryString, [tbl, col1, val1, col2, val2], function (err, result) {
                if (err) 
                {
                    reject(err);

                }
                else
                {
                    resolve(result.changedRows);
                }
                
            })
        })
        
    }

}
module.exports = orm