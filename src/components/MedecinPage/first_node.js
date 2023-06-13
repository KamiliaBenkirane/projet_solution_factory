var mysql = require('mysql');

var con = mysql.createConnection({
    host:"medical.mysql.database.azure.com",
    user:"adminproject",
    password:"MedicalSolution!"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    sql = "SELECT * FROM drug";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });