//Node import of JQuery from mode_modules
const $ = require('jquery');
//Node import from api.js
const {getMovies, addMovie, editMovie} = require('./api.js');

let movieId = 8;

//Edit movie test
const editMovieButton = $("#edit-movie-test");
editMovieButton.click(function(){
  editMovie(1, "Casablanca", 9000);
  container.html("<h1>Loading...</h1>");
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    let result = '';
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      result +=
          "<div><h5>Movie ID: " + id + "</h5><ul>" +
          "<li>Movie title: " + title + "</li>" +
          "<li>Movie rating: " + rating + "</li>" +
          "</ul></div>";

      console.log(result);
    });
    container.html(result);
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
  });;
});


const container = $('#container');

const submitNewMovie = $('#add-movie-button');
const addMovieName = $('#add-movie-name');
const addMovieRating = $('#add-movie-rating');
submitNewMovie.click(function(){
  addMovie(addMovieName.val(), addMovieRating.val(), movieID);
  movieID++;
  console.log(movieID);
});

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  let result = '';
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    result +=
        "<div><h5>Movie ID: " + id + "</h5><ul>" +
        "<li>Movie title: " + title + "</li>" +
        "<li>Movie rating: " + rating + "</li>" +
        "</ul></div>";
    console.log(result);
  });
  container.html(result);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});