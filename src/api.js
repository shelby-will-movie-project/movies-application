module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: (title, rating, movieID) => {
    const moviePost = {title: title, rating: rating, id: movieID};
    const url = '/api/movies';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moviePost),
    };
    fetch(url, options)
        .then(response => response.json())
  },
  editMovie: (id, title, rating) => {
    const moviePost = {title: title, rating: rating};
    const url = '/api/movies/' + id;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moviePost),
    };
    fetch(url, options)
        .then(response => response.json())
  }
};
