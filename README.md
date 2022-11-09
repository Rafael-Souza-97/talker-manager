# Talker Manager Project

Aplicação realizada enquanto aluno da [Trybe](https://www.betrybe.com/) para reforçar os conhecimentos sobre [Node.js](https://nodejs.org/en/) e criação de [API REST](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/). O trabalho consiste em criar uma API para que o usuário possa gerenciar palestrantes através de um banco de dados, utilizando o framework [Express](https://expressjs.com/) com [C.R.U.D](https://blog.betrybe.com/tecnologia/crud-operacoes-basicas/)(Create, Read, Update and Delete). A aplicação [Node](https://nodejs.org/en/) está configurada para rodar dentro de um container [Docker](https://www.docker.com/).

<br>

## Rodando a aplicação via Docker

- Clone o repositório

```bash
git clone git@github.com:Rafael-Souza-97/talker-manager.git
```

- Rode o serviço `node` com o comando `docker-compose up -d`.

 > - Esse serviço irá inicializar um container chamado `talker_manager`.
 > - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
  
```bash
docker-compose up -d
```

- Use o comando `docker exec -it talker_manager bash`.

```bash
docker exec -it talker_manager bash
```

- Instale as depëndencias, caso necessário, com 'npm install' (dentro do bash do container).

```bash
npm install
```

  > Execute a aplicação com `npm start` ou `npm run dev`
 
 <br>

## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [Trybe](https://www.betrybe.com/)

## Tecnologias / Ferramentas utilizadas

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [API REST](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/)
- [Docker](https://www.docker.com/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Zoom](https://zoom.us/)
- [Slack](https://slack.com/intl/pt-br/)
- [VsCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- [Linux - Ubuntu](https://ubuntu.com/)

## Infos Adicionais

- ###### Percentual de cumprimento de requisitos ([Trybe](https://www.betrybe.com/))- 100%
