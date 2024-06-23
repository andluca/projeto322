<h1 align="center">Rotten Avocados</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/count/andluca/projeto322?color=25ba4d">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andluca/projeto322?color=25ba4d">
</p>

## Descrição
Site de avaliação de filmes e séries (como o Rotten Tomatoes), no qual usuários podem avaliar e ver as notas de filmes e séries.

## Tecnologias
**Cliente:** TypeScript, React
**Servidor:** Kotlin, Spring  


## Tópicos Abordados

### Relacionamentos
Composição: 
+ MovieController possui um ListMoviesUsecasePort, para ter acesso ao core e conseguir acessar os filmes
+ ListMoviesUsecaseAdapter possui um MovieRepositoryPort para ter acesso ao banco de dados (no caso ao invés do banco estamos utilizando um arquivo XML)
+ 

Agregação:
+ MovieReader possui uma lista de Movie
+

Herança:
+ NotFoundException e DataAccessException herdam a classe RuntimeException (classe padrão do Kotlin)
+

### Interfaces e Classes Abstratas
+ MovieRepositoryAdapter implementa a interface MovieRepositoryPort
+ MovieReader implementa a interface FileReader
+ CriticUser e CommonUser herdam a classe abstrata User, pois implementam o método rate de maneiras diferentes

### Interface Gráfica
+ A interface gráfica foi feita utilizando React e Typescript. Ela acessa a API feita em kotlin, possibilitando a criação de avaliações e a visualização mais fácil de filmes e avaliações pelo usuário final
+

### Design Patterns
+ Adapter Pattern
+ Factory Pattern
+ Dependency Injection
+ Repository Pattern

#### Tratamento de exceção
+ Tratamento de exceções são feitas, por exemplo, na classe MovieReader, para garantir que erros de leitura de arquivo sejam tratados de forma correta
+ A classe ControllerExceptionDevice também auxilia a garantir que erros sejam tratados antes de enviados aos usuários da API

#### Arquivos (gravação e leitura)
+ Dados como Filmes e Avaliações são salvos em arquivos XML pela classe MovieReader e 