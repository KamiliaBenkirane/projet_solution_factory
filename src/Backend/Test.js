var mysql = require('mysql')

var con = mysql.createConnection({
    host: "medical.mysql.database.azure.com",
    user: "adminproject",
    password: "MedicalSolution!",
    database: "medic"
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO test_table (pName, medical) VALUES ('Hallo', 'Dolipan')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Insert sucess")

//     })
// });

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM test_table", function(err, result, fields){
        if(err) throw err;
        // console.log(result);
        // console.log(result[0].medical)
        console.log(fields[0].name);
    });
});

