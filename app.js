/**
 * kumpulan modul yang di perlukan di NodeJS.
 */

 var express = require('express');
 var routes = require('./routes');
 var http = require('http');
 var path = require('path');
 var bodyParser = require('body-parser');
 var logger = require('morgan');
 var methodOverride = require('method-override');

 var app = express();

 app.set('port', process.env.PORT || 3000);
 app.set('views', __dirname + '/views');
 app.set('view engine', 'jade');
 app.use(logger('dev'));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(methodOverride('_method'));
 app.use(require('stylus').middleware(__dirname + '/public'));
 app.use(express.static(path.join(__dirname, 'public')));

 if (app.get('env') == 'development') {
 	app.locals.pretty = true;
 }

 app.get('/', routes.index);

 http.createServer(app).listen(app.get('port'), function(){
 	console.log("Server Dah Oke Gan, Bisa Running " + app.get('port'));
 });