const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const ejs = require('ejs');

const router = express.Router();

const client = mysql.createConnection({
  host: 'localhost', // DB서버 IP주소
  port: 3306, // DB서버 Port주소
  user: 'root', // DB접속 아이디
  password: 'gachon654321', // DB암호
  database: 'covid' //사용할 DB명
});

const patientPer = (patientNow, releaseNow) => {
  return parseInt((releaseNow / patientNow) * 100);
}


router.get('/', (request, response) => {
  client.query('SELECT * FROM CovidInfo order by day desc limit 1', (error, results) => {

    let patientNow, examinationNow, releaseNow, deathNow, patientAdd, examinationAdd, deathAdd, patientIn, patientOut, day;

    results.forEach((item, i) => {
      patientNow = item.patientNow;
      examinationNow = item.examinationNow;
      releaseNow = item.releaseNow;
      deathNow = item.deathNow;
      patientAdd = item.patientAdd;
      examinationAdd = item.examinationAdd;
      deathAdd = item.deathAdd;
      patientIn = item.patientIn;
      patientOut = item.patientOut;
      day = item.day;
    });


    let urlData = fs.readFileSync(__dirname + '/../files/webPage.txt', 'utf8');

    fs.readFile('./view/index.ejs', 'utf8', (error, data) => {
      response.send(ejs.render(data, {
        patientNow : patientNow,
        examinationNow : examinationNow,
        releaseNow : releaseNow,
        deathNow : deathNow,
        patientAdd : patientAdd,
        examinationAdd : examinationAdd,
        deathAdd : deathAdd,
        patientIn : patientIn,
        patientOut : patientOut,
        day : day,
        patientPer: patientPer(patientNow, releaseNow),
        urlData: urlData
      }));
    });
  });
});

module.exports = router;
