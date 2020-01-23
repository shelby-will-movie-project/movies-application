module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: (title, rating) => {
    const moviePost = {title: title, rating: rating, img: ""};
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
    const moviePost = {title: title, rating: rating, img: ""};
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
  },
  deleteMovie: (id) => {
    const url = '/api/movies/' + id;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    fetch(url, options)
        .then(response => response.json())
  },

};
