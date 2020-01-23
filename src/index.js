//Node import of JQuery from mode_modules
const $ = require('jquery');
//Node import from api.js
const {getMovies, addMovie, editMovie, deleteMovie} = require('./api.js');

//Edit movie test
const editMovieButton = $("#edit-movie-test");
editMovieButton.click(function(){
  editMovie(1, "Casablanca", 9000);
  container.html("<h1>Loading...</h1>");
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    let result = '';
    movies.forEach(({title, rating, id, img}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      result +=
          "<div class=\"flip-card\">" +
      "<div class=\"flip-card-inner\">" +
        "<div class=\"flip-card-front\">"+
          "<img src=\"" + img +"\" alt=\"Avatar\" style=\"width:300px;height:300px;\">" +
        "</div>" +
        "<div class=\"flip-card-back\">" +
            "<h1>" + title + "</h1>" +
            "<p>" + rating + "</p>" +
            "<p>" + id + "</p>" +
        "</div>" +
      "</div>" +
    "</div>";
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
  addMovie(addMovieName.val(), addMovieRating.val());
});

const deleteMovieID = $("#delete-movie-id");
const deleteMovieButton = $("#delete-movie-button");
deleteMovieButton.click(function(){
  deleteMovie(deleteMovieID.val());
});

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  let result = '';
  movies.forEach(({title, rating, id, img}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    result +=
        "<div class=\"flip-card\">" +
        "<div class=\"flip-card-inner\">" +
        "<div class=\"flip-card-front\">"+
        "<img src=\"" + img +"\" alt=\"Avatar\" style=\"width:300px;height:300px;\">" +
        "</div>" +
        "<div class=\"flip-card-back\">" +
        "<h1>" + title + "</h1>" +
        "<p>" + rating + "</p>" +
        "<p>" + id + "</p>" +
        "</div>" +
        "</div>" +
        "</div>";
    console.log(result);
  });
  container.html(result);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});