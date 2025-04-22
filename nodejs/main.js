var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query("SELECT name, address FROM customers", function (err, result) {
    if (err) throw err;
    console.log(result[2].address);
  });
});