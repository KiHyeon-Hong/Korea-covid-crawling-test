const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
//const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const request = require('request');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


//app.use(express.static('View'));
app.use(express.static('view'));


const index = require(__dirname + '/controller/index.js');
const api = require(__dirname + '/controller/api/index.js');


app.use('/', index);
app.use('/api', api);


app.listen(65001, () => {
	request.get(
		{url:'https://api.ipify.org'},
		function(err, response, body) {
				fs.writeFileSync(__dirname + '/files/webPage.txt', body + ':65001', 'utf8')
				console.log('server running at ' + body + ':65001');
		}
	);
});
