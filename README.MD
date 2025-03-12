# Busca de Filmes com OMDb API
Este é um pequeno projeto que permite ao usuário buscar informações sobre filmes utilizando a API OMDb (Open Movie Database). O código recupera dados sobre um filme a partir do título fornecido pelo usuário e exibe detalhes como diretor, atores, gênero, sinopse, avaliação no IMDb, entre outros.

# Funcionalidade
O usuário insere o título do filme no campo de busca.
A função searchMovie() é acionada, fazendo uma solicitação à API OMDb com o título do filme.
A resposta da API é processada e, caso o filme seja encontrado, as informações detalhadas são exibidas na página.
Se ocorrer algum erro na busca, uma mensagem de erro é exibida ao usuário.

# Como funciona
1. Função searchMovie()

Esta função é responsável por:
Capturar o título do filme inserido pelo usuário.
Criar a URL da requisição à API OMDb com o título e uma chave de API.
Fazer a requisição com fetch() e tratar a resposta em formato JSON.
Se a resposta for bem-sucedida, chama a função displayMovieInfo() para exibir as informações do filme.
Se houver algum erro (como filme não encontrado ou erro na requisição), exibe uma mensagem de erro.

2. Função displayMovieInfo(data)

A função displayMovieInfo() é chamada quando a API retorna informações sobre o filme.
Exibe o título do filme, ano, diretor, atores, gênero, sinopse e avaliação no IMDb.
Preenche um div com o ID movie-info com essas informações.

# Como usar
Clone este repositório em seu ambiente local.

Substitua a variável apiKey no código pela sua própria chave de API da OMDb. Você pode obter uma chave de API gratuita em OMDb API.
Abra o arquivo HTML em seu navegador.

Insira o título do filme na caixa de pesquisa e clique para buscar.

As informações do filme serão exibidas na página.

# Estrutura do Código

// Função para buscar o filme com base no título fornecido
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

// Função para exibir as informações do filme
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
    ´;
}

# Requisitos

Navegador moderno com suporte a JavaScript.

Conexão à internet para fazer as requisições à API OMDb.

# Licença
Este projeto é de código aberto. Sinta-se à vontade para usá-lo, modificá-lo e distribuí-lo conforme necessário.
