const { readFile } = require('fs').promises; 
const path = require('path');

const usersDb = path.resolve(__dirname, '.', 'talker.json');

const getTalkerUsers = async () => {
  const response = await readFile(usersDb, 'utf8');
  return JSON.parse(response);
};

module.exports = {
  getTalkerUsers,
};