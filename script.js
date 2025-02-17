function searchMovie() {
    const title = document.getElementById('movie-title').value;
    const apiKey = '000000';  // Substitua pela sua chave de API OMDb
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieInfo(data);
            } else {
                document.getElementById('movie-info').innerHTML = `<p>Erro: ${data.Error}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('movie-info').innerHTML = `<p>Erro ao carregar os dados.</p>`;
        });
}

function displayMovieInfo(data) {
    const movieInfoDiv = document.getElementById('movie-info');
    movieInfoDiv.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Diretor:</strong> ${data.Director}</p>
        <p><strong>Atores:</strong> ${data.Actors}</p>
        <p><strong>Gênero:</strong> ${data.Genre}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>Avaliação IMDB:</strong> ${data.imdbRating}</p>
        <p><strong>Idioma:</strong> ${data.Language}</p>
    `;
}
