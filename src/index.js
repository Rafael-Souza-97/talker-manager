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

app.get('/talker/:id', async (req, res) => {
  const users = await getTalkerUsers();
  const { id } = req.params;

  const userId = users.find((user) => user.id === Number(id));

  if (!userId) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }

  return res.status(200).json(userId);
});

app.listen(PORT, () => {
  console.log('Online');
});
