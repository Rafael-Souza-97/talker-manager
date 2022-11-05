const { readFile, writeFile } = require('fs').promises; 
const path = require('path');

const usersDb = path.resolve(__dirname, '..', 'talker.json');

const HTTP_CLIENT_ERROR_STATUS = 400;

const getTalkerUsers = async () => {
  const response = await readFile(usersDb, 'utf8');
  return JSON.parse(response);
};

const updateTalkerUsers = async (id, body) => {
  const { name, age, talk } = body;
  const users = await getTalkerUsers();

  let userId = users.find((user) => Number(user.id) === Number(id));
  const removedIdUser = users.filter((user) => user !== userId);

  userId = { name, age, id: Number(id), talk };

  const update = [...removedIdUser, userId];

  const newUser = JSON.stringify(update, null, 2);
  await writeFile(usersDb, newUser);

  return userId;
};

const addNewUser = async (name, age, talk) => {
  const users = await getTalkerUsers();
  const id = Number(users[users.length - 1].id) + 1;
  users.push({
    name,
    age,
    id,
    talk,
  });

  await writeFile(usersDb, JSON.stringify(users, null, 2));
  return { name, age, id, talk };
};

const deleteUser = async (id) => {
  const users = await getTalkerUsers();
  const removedIdUser = users.filter((user) => Number(user.id) !== Number(id));

  const newDb = JSON.stringify(removedIdUser, null, 2);
  await writeFile(usersDb, newDb);
  
  return removedIdUser;
};

const validateTalkerName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "name" é obrigatório',
    });
  }

  if (name.length < 3) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  return next();
};

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "age" é obrigatório',
    });
  }

  if (age < 18) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  return next();
};

const validateTalkerTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "talk" é obrigatório',
    });
  }

  return next();
};

const validateTalkerWatchedAt = (req, res, next) => {
  // https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
  const { watchedAt } = req.body.talk;

  if (!watchedAt) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }
  const dateValidation = watchedAt.match(/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/g);

  if (!dateValidation) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  return next();
};

const validateTalkerRate = (req, res, next) => {
  const { rate } = req.body.talk;

  if (rate === undefined) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "rate" é obrigatório',
    });
  }

  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  return next();
};

module.exports = {
  getTalkerUsers,
  updateTalkerUsers,
  addNewUser,
  deleteUser,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatchedAt,
  validateTalkerRate,
};
