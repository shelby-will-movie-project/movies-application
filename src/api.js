module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: (title, rating, id) => {
    const moviePost = {title: title, rating: rating, id: id};
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
  }
};
