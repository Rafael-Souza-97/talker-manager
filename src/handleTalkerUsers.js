const { readFile } = require('fs').promises; 
const path = require('path');

const usersDb = path.resolve(__dirname, '.', 'talker.json');

const getTalkerUsers = async () => {
  const response = await readFile(usersDb, 'utf8');
  return JSON.parse(response);
};

const tokenGenerate = () => {
  // Função adaptada de https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/

  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < 16; index += 1) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

module.exports = {
  getTalkerUsers,
  tokenGenerate,
};