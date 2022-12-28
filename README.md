# Talker Manager Project

Aplicação realizada enquanto aluno da [Trybe](https://www.betrybe.com/) para reforçar os conhecimentos sobre [Node.js](https://nodejs.org/en/) e criação de [API REST](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/). O projeto consiste em criar uma API para que o usuário possa gerenciar palestrantes através de um banco de dados, utilizando o framework [Express](https://expressjs.com/) com [C.R.U.D](https://blog.betrybe.com/tecnologia/crud-operacoes-basicas/)(Create, Read, Update and Delete). A aplicação [Node](https://nodejs.org/en/) está configurada para rodar dentro de um container [Docker](https://www.docker.com/).

<br>

<details>
  <summary><strong>Como instalar o Projeto Talker Manager</strong></summary><br />

## Instalação
 
<hr>
 
### Rodando a aplicação via [Docker](https://www.docker.com/)

> :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/talker-manager.git`:

```bash
git clone git@github.com:Rafael-Souza-97/talker-manager.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd talker-manager
```

<br>

- Rode o serviço `node` com o comando `docker-compose up -d`:

 > - Esse serviço irá inicializar um container chamado `talker_manager`.
 > - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
 
```bash
docker-compose up -d
```

<br>

- Use o comando `docker exec -it talker_manager bash`:

 > - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
 > - As credencias de acesso ao banco de dados estão definidas no arquivo `docker-compose.yml`, e são acessíveis no container através das variáveis de    ambiente `MYSQL_USER` e `MYSQL_PASSWORD`.

```bash
docker exec -it talker_manager bash
```

<br>

- Instale as depëndencias, caso necessário, com `npm install` (dentro do bash do container):

```bash
npm install
```

 > Execute a aplicação com `npm start` ou `npm run dev`

<br>
<hr>
 
### Rodando a aplicação SEM [Docker](https://www.docker.com/)

  > :warning: Para rodar a aplicação desta forma, obrigatoriamente você deve ter o [Node](https://nodejs.org/en/) instalado em seu computador.
 
 <br>

- Clone o repositório `git@github.com:Rafael-Souza-97/talker-manager.git`:

```bash
git clone git@github.com:Rafael-Souza-97/talker-manager.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd talker-manager
```

 > Execute a aplicação com `npm start` ou `npm run dev`

<hr>
<br>

</details>

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
