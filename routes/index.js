var moviesJSON = require('../movies.json'); // получение информации из файла json


//home (link)
exports.home = function(req,res){

	var movies = moviesJSON.movies;

	res.render('home', {
		title : "Фильмы",
		movies : movies
	});
};

//movie_single
exports.movie_single =  function(req,res) {  // при написании в ссылке movie_number/3 при помощи цикла выведет другую страницу

	var episode_number = req.params.episode_number; // создание страницы для каждого фильмы, считывается с json

	var movies = moviesJSON.movies;

	if (episode_number >= 1 && episode_number <=6) {


		var movie = movies[episode_number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;

			res.render('movie_single', {
				movies : movies,
				title:title,
				movie : movie,
				main_characters : main_characters
			});
	} else {
		res.render('notFound', {
			movies: movies,
			title : "Страницы не существует"
		});
	}




};

//notFound
exports.notFound = function(req, res) {
	res.send("Страницы не существует");
	res.render('notFound', {
		movies:movies,
		title : "Страницы не существует"
	})
};
