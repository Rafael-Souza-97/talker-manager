const express = require('express');
const bodyParser = require('body-parser');
const { getTalkerUsers } = require('./handleTalkerUsers');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const users = await getTalkerUsers();
  if (users.length === 0) return res.status(200).json([]);
  return res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log('Online');
});
