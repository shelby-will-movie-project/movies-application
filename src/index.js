/**
 * require style imports
 */
const $ = require('jquery');
const {getMovies} = require('./api.js');
const container = $('#container');

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
