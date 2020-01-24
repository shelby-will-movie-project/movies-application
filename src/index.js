//Node import of JQuery from mode_modules
const $ = require('jquery');
//Node import from api.js
const {getMovies, addMovie, editMovie, deleteMovie} = require('./api.js');

//Main content area containers
const container = $('#container');
const loading = $('#loading');

//Reloads content areas for all CRUD operations
function refreshMovies() {
  getMovies().then((movies) => {
    let result = '';
    movies.forEach(({title, rating, id, img}) => {
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
          "<h3>" + title + "</h3>" +
          "<h5>Rating: " + buildStars(rating) + "</h5>" +
          "<h5>ID: " + id + "</h5>" +
          "</div>" +
          "</div>" +
          "</div>";
    });
    loading.hide();
    container.show();
    container.html(result);
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
  });
}

//Build Font-Awesome Star
function buildStars(numberOfStars) {
  let returnString = '';
  for(let i=0;i<numberOfStars;i++) {
    returnString += "<i class='fas fa-star'></i>"
  }
  return returnString;
}

//Add movie
const submitNewMovie = $('#add-movie-button');
const addMovieName = $('#add-movie-name');
const addMovieRating = $('#add-movie-rating');
submitNewMovie.click(function(){
  container.hide();
  loading.show();
  loading.html("<div class='loadingio-spinner-spinner-ib6rz94n49a loading1'><div class='ldio-ioww6g0mvq loading2'>" +
      "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>" +
      "<div></div><div></div></div></div>");
  addMovie(addMovieName.val(), addMovieRating.val());
  refreshMovies();
});

//Edit movie
const editMovieButton = $("#edit-movie-button");
const editMovieID = $("#edit-movie-id");
const editMovieName = $("#edit-movie-name");
const editMovieRating = $("#edit-movie-rating");
editMovieButton.click(function(){
  container.hide();
  loading.show();
  loading.html("<div class='loadingio-spinner-spinner-ib6rz94n49a loading1'><div class='ldio-ioww6g0mvq loading2'>" +
      "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>" +
      "<div></div><div></div></div></div>");
  editMovie(editMovieID.val(), editMovieName.val(), editMovieRating.val());
  refreshMovies();
});

//Delete movie
const deleteMovieID = $("#delete-movie-id");
const deleteMovieButton = $("#delete-movie-button");
deleteMovieButton.click(function(){
  container.hide();
  loading.show();
  loading.html("<div class='loadingio-spinner-spinner-ib6rz94n49a loading1'><div class='ldio-ioww6g0mvq loading2'>" +
      "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>" +
      "<div></div><div></div></div></div>");
  deleteMovie(deleteMovieID.val());
  refreshMovies();
});

//Initial page load
getMovies().then((movies) => {
  container.hide();
  let result = '';
  movies.forEach(({title, rating, id, img}) => {
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
        "<h3>" + title + "</h3>" +
        "<h5>Rating: " + buildStars(rating) + "</h5>" +
        "<h5>ID: " + id + "</h5>" +
        "</div>" +
        "</div>" +
        "</div>";
  });
  loading.hide();
  container.show();
  container.html(result);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});