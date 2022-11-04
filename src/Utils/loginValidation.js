const HTTP_CLIENT_ERROR_STATUS = 400;

const validadeLoginEmail = (req, res, next) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({ message: 'O campo "email" é obrigatório' });
  }

  const formattedEmail = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
  
  if (!formattedEmail) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  return next();
};

const validadeLoginPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < 6) {
    return res.status(HTTP_CLIENT_ERROR_STATUS)
    .json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }

  return next();
};

module.exports = { 
  validadeLoginEmail,
  validadeLoginPassword,
};
