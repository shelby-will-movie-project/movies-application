//Node import of JQuery from mode_modules
const $ = require('jquery');
//Node import from api.js
const {getMovies, addMovie, editMovie, deleteMovie} = require('./api.js');

const container = $('#container');

//Edit movie
const editMovieButton = $("#edit-movie-button");
const editMovieID = $("#edit-movie-id");
const editMovieName = $("#edit-movie-name");
const editMovieRating = $("#edit-movie-rating");
editMovieButton.click(function(){
  container.html("<h1>Loading...</h1>");
  editMovie(editMovieID.val(), editMovieName.val(), editMovieRating.val());
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    let result = '';
    movies.forEach(({title, rating, id, img}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      if(img === "") {
        img = "img/Coming-Soon.jpg";
      }
      result +=
          "<div class=\"flip-card\">" +
          "<div class=\"flip-card-inner\">" +
          "<div class=\"flip-card-front\">"+
          "<img src=\"" + img +"\" alt=\"Avatar\" style=\"width:300px;height:300px;\">" +
          "</div>" +
          "<div class=\"flip-card-back\">" +
          "<h1>Title: " + title + "</h1>" +
          "<p>Rating: " + rating + "</p>" +
          "<p>ID: " + id + "</p>" +
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
});

const submitNewMovie = $('#add-movie-button');
const addMovieName = $('#add-movie-name');
const addMovieRating = $('#add-movie-rating');
submitNewMovie.click(function(){
  container.html("<h1>Loading...</h1>");
  addMovie(addMovieName.val(), addMovieRating.val());
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    let result = '';
    movies.forEach(({title, rating, id, img}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      if(img === "") {
        img = "img/Coming-Soon.jpg";
      }
      result +=
          "<div class=\"flip-card\">" +
          "<div class=\"flip-card-inner\">" +
          "<div class=\"flip-card-front\">"+
          "<img src=\"" + img +"\" alt=\"Avatar\" style=\"width:300px;height:300px;\">" +
          "</div>" +
          "<div class=\"flip-card-back\">" +
          "<h1>Title: " + title + "</h1>" +
          "<p>Rating: " + rating + "</p>" +
          "<p>ID: " + id + "</p>" +
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
});

const deleteMovieID = $("#delete-movie-id");
const deleteMovieButton = $("#delete-movie-button");
deleteMovieButton.click(function(){
  container.html("<h1>Loading...</h1>");
  deleteMovie(deleteMovieID.val());
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    let result = '';
    movies.forEach(({title, rating, id, img}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      if(img === "") {
        img = "img/Coming-Soon.jpg";
      }
      result +=
          "<div class=\"flip-card\">" +
          "<div class=\"flip-card-inner\">" +
          "<div class=\"flip-card-front\">"+
          "<img src=\"" + img +"\" alt=\"Avatar\" style=\"width:300px;height:300px;\">" +
          "</div>" +
          "<div class=\"flip-card-back\">" +
          "<h1>Title: " + title + "</h1>" +
          "<p>Rating: " + rating + "</p>" +
          "<p>ID: " + id + "</p>" +
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
});

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  let result = '';
  movies.forEach(({title, rating, id, img}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    if(img === "") {
      img = "img/Coming-Soon.jpg";
    }
    result +=
        "<div class=\"flip-card\">" +
        "<div class=\"flip-card-inner\">" +
        "<div class=\"flip-card-front\">"+
        "<img src=\"" + img +"\" alt=\"Avatar\" style=\"width:300px;height:300px;\">" +
        "</div>" +
        "<div class=\"flip-card-back\">" +
        "<h1>Title: " + title + "</h1>" +
        "<p>Rating: " + rating + "</p>" +
        "<p>ID: " + id + "</p>" +
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