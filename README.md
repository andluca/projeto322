<img src="logo.png" width=40/>

<h1 align="center">Rotten Avocados</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/count/andluca/projeto322?color=25ba4d">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andluca/projeto322?color=25ba4d">
</p>

## Participantes

<table>
  <tr>
    <th>
      Nome
    </th>
    <th>
      RA
    </th>
  </tr>
  <tr>
    <td><a href="https://github.com/lucaspeixotg">Lucas Peixoto Gonçalves</a></td>
    <td>233419</td>
  </tr>
  <tr>
    <td><a href="https://github.com/piresflp">Felipe Pires Araujo</a></td>
    <td>186697</td>
  </tr>
  <tr>
    <td><a href="https://github.com/andluca/">André Lucas Loubet Souza</a></td>
    <td>253333</td>
  </tr>
  <tr>
    <td><a href="https://github.com/artuurdias">Artur Dias de Oliveira</a></td>
    <td>252635</td>
  </tr>
</table>


## Descrição
Site de avaliação de filmes e séries (como o Rotten Tomatoes), no qual usuários podem avaliar e ver as notas de filmes e séries.

<br>

## Tecnologias
**Cliente:** TypeScript, React

**Servidor:** Kotlin, Spring  

<br>

## Tópicos Abordados

### Relacionamentos
Composição: 
+ MovieController é composto por um ListMoviesUsecasePort, para ter acesso ao core e conseguir acessar os filmes
+ ListMoviesUsecaseAdapter é composto por um MovieRepositoryPort para ter acesso ao banco de dados (no caso ao invés do banco estamos utilizando um arquivo XML)
+ ReviewController é composto por um CreateReviewUsecasePorte e um QueryReviewUsecasePort, para ter acesso ao core e conseguir acessar e criar novas avaliações

Herança:
+ NotFoundException e DataAccessException herdam a classe RuntimeException (classe padrão do Kotlin)

### Interfaces e Classes Abstratas
+ MovieRepositoryAdapter implementa a interface MovieRepositoryPort
+ ReviewRepositoryAdapter implementa a interface ReviewRepositoryPort
+ MovieReader e ReviewReader implementam a interface FileReader
+ CriticUser e CommonUser herdam a classe abstrata User, pois implementam o método rate de maneiras diferentes

### Interface Gráfica
+ A interface gráfica foi feita utilizando React e Typescript. Ela acessa a API feita em kotlin, possibilitando a criação de avaliações e a visualização mais fácil de filmes e avaliações pelo usuário final

### Design Patterns
+ Port and Adapter Pattern (Arquitetura Hexagonal)
  + Neste padrão, a aplicação é dividida na parte interna (Aplicação, Domínio) e na parte externa (Portas, Adaptadores). A parte interna da aplicação é isolada do mundo exterior por portas e adaptadores.
+ Factory Pattern
  + O padrão Factory é aplicado no projeto através dos métodos rate nas classes CriticUser e CommonUser. Esses métodos criam e retornam uma nova instância de Review. A lógica de criação da Review é encapsulada dentro do método rate, que é uma característica do padrão Factory. A lógica para calcular a classificação é diferente para CriticUser e CommonUser, demonstrando como o padrão Factory pode ser usado para encapsular a lógica de criação de objetos que têm comportamentos diferentes
+ Dependency Injection (DI)
  + Uso das anotações @Service e @RestController do Spring, que são usadas para definir beans que o container de DI do Spring pode gerenciar. Por exemplo, em MovieController.kt, o ListMoviesUsecasePort está sendo injetado via construtor.
+ Repository Pattern
  + Usado para abstrair a camada de dados, tornando a aplicação mais fácil de manter, testar e modular. Por exemplo, MovieRepositoryPort.kt é uma interface que define métodos para acessar filmes, mas sem revelar aos módulos mais externos sua implementação.

### Tratamento de exceção
+ Tratamento de exceções são feitas, por exemplo, na classe MovieReader, para garantir que erros de leitura de arquivo sejam tratados de forma correta
+ A classe ControllerExceptionDevice é responsável por garantir que erros sejam tratados antes de enviados aos usuários da API.

### Arquivos (gravação e leitura)
+ Dados como Filmes e Avaliações são salvos em arquivos XML pela classe MovieReader e ReviewReader

<br>

## UML
<img alt="UML Diagram" src="uml.png" />
