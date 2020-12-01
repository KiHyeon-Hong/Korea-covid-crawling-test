const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
var exec = require('child_process').exec;

const router = express.Router();

const client = mysql.createConnection({
  host: 'localhost', // DB서버 IP주소
  port: 3306, // DB서버 Port주소
  user: 'root', // DB접속 아이디
  password: 'gachon654321', // DB암호
  database: 'covid' //사용할 DB명
});

router.get('/', (request, response) => {
  client.query('SELECT * FROM CovidInfo order by day desc limit 1', (error, results) => {
    response.send(results);
  });
});

router.get('/patientNow', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.patientNow).toString());

});

router.get('/examinationNow', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.examinationNow).toString());
});

router.get('/releaseNow', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.releaseNow).toString());
});

router.get('/deathNow', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.deathNow).toString());
});

router.get('/patientAdd', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.patientAdd).toString());
});

router.get('/examinationAdd', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.examinationAdd).toString());
});

router.get('/releaseAdd', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.releaseAdd).toString());
});

router.get('/deathAdd', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.deathAdd).toString());
});

router.get('/patientIn', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.patientIn).toString());
});

router.get('/patientOut', (request, response) => {
  let data = fs.readFileSync('files/covid.json', 'utf8');
  data = data.replace( /'/gi, '"');
  data = JSON.parse(data);

  response.send((data.patientOut).toString());
});

module.exports = router;
