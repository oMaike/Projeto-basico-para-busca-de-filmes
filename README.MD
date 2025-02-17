1-Pesquisa de Filmes
Este projeto básico (BÁSICO) consiste em uma página web simples que permite ao usuário buscar informações sobre filmes através da API OMDb (Open Movie Database). O usuário pode digitar o título de um filme e visualizar informações como título, ano, diretor, elenco, gênero, enredo e avaliação do IMDb.

2-Funcionalidade
Ao digitar o nome de um filme e clicar no botão "Buscar", o sistema realiza uma consulta à API OMDb utilizando a chave de API fornecida. Se o filme for encontrado, as informações são exibidas na tela. Caso contrário, será mostrado uma mensagem de erro.

3-Estrutura de Arquivos
index.html: Arquivo HTML principal que contém a estrutura da página.
script.js: Arquivo JavaScript responsável pela lógica de busca e exibição das informações dos filmes.
Como Usar
Configuração Inicial:

4-Você precisará obter uma chave de API da OMDb. Acesse OMDb API e cadastre-se para obter a chave.
Substitua a chave de API no código do script.js, onde está indicado: const apiKey = '000000';.

5-Passos para buscar um filme:

Abra o arquivo index.html em um navegador.
Digite o nome de um filme no campo de texto.
Clique no botão "Buscar".
As informações do filme aparecerão abaixo, caso o filme tenha sido encontrado.