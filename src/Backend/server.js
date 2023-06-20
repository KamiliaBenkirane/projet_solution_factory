const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'medical.mysql.database.azure.com',
    user: 'adminproject',
    password: 'MedicalSolution!',
    database: 'medic'
});

db.connect(err => {
    if(err) throw err;
    console.log('MySQL Connected...')
});

app.post('/prescription',(req,res) =>{
    let data = {
        patientName: req.body.patientName,
        patientBirthDate: req.body.patientBirthDate,
        medication: req.body.medication,
        dosage: req.body.dosage
    }

    let sql = "INSERT INTO test_table (pName,pDate,medical,dosage) VALUES ?";
  db.query(sql, data, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Prescription added...');
  });
});


app.listen(8080, () => {
  console.log('Server started on port 8080');
});