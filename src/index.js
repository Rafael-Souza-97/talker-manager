const express = require('express');
const bodyParser = require('body-parser');
const { validadeLoginEmail, validadeLoginPassword } = require('./Utils/loginValidation');
const { getTalkerUsers } = require('./Utils/handleTalkerUsers');
const { tokenGenerate } = require('./Utils/tokens');

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
  if (users.length === 0) return res.status(HTTP_OK_STATUS).json([]);
  return res.status(HTTP_OK_STATUS).json(users);
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

  return res.status(HTTP_OK_STATUS).json(userId);
});

app.post('/login', validadeLoginEmail, validadeLoginPassword, (_req, res) => {
  const token = tokenGenerate();

  return res.status(HTTP_OK_STATUS)
    .json({ token: `${token}` });
});

app.listen(PORT, () => {
  console.log('Online');
});
