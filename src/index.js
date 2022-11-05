const express = require('express');
const bodyParser = require('body-parser');
const {
  getTalkerUsers,
  updateTalkerUsers,
  addNewUser,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
} = require('./Utils/handleTalkerUsers');
const { validadeLoginEmail, validadeLoginPassword } = require('./Utils/loginValidation');
const { tokenGenerate, tokenValidation } = require('./Utils/tokens');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
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

app.post('/talker', tokenValidation, validateTalkerName, validateTalkerAge,
  validateTalkerTalk, validateTalkerWatchedAt, validateTalkerRate, async (req, res) => {
  const { name, age, talk, watchedAt, rate } = req.body;
  const newUser = await addNewUser(name, age, talk, watchedAt, rate);

  return res.status(HTTP_CREATED_STATUS)
    .json(newUser);
});

app.put('/talker/:id', tokenValidation, validateTalkerName, validateTalkerAge,
validateTalkerTalk, validateTalkerWatchedAt, validateTalkerRate, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  
  const a =  await updateTalkerUsers(id, body);

  return res.status(HTTP_OK_STATUS).json(a);
});

app.listen(PORT, () => {
  console.log('Online');
});
