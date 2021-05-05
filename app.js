var express = require('express');

var app = express(); //подключение всех модулей express


app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); // в папке паблик файлы
// сохраняет время и позволяет каждый раз не писать /public в полном пути картинки

//routes

//home (link)
app.get('/', routes.home);

//movie_single
app.get('/movie_number/:episode_number?', routes.movie_single);

//notFound
app.get('*', routes.notFound);


app.listen(3000, function() { // определение порта
	console.log("running on localhost 3000");
});
