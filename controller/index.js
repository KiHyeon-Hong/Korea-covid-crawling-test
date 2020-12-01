const express = require('express');
const fs = require('fs');
var exec = require('child_process').exec;

const router = express.Router();

router.get('/', (request, response) => {
  exec('python3 module/covidCrawling.py', function callback(error, stdout, stderr){
    response.send('sucess');
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
