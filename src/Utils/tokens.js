const HTTP_CLIENT_UNAUTHORIZED_STATUS = 401;

const tokenGenerate = () => {
  // Função adaptada de https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/

  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < 16; index += 1) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

const tokenValidation = (req, res, next) => {
  const tokenAuth = req.headers.authorization;

  if (!tokenAuth) {
    return res.status(HTTP_CLIENT_UNAUTHORIZED_STATUS).json({
      message: 'Token não encontrado',
    });
  }

  if (tokenAuth.length !== 16) {
    return res.status(HTTP_CLIENT_UNAUTHORIZED_STATUS).json({
      message: 'Token inválido',
    });
  }

  next();
};

module.exports = {
  tokenGenerate,
  tokenValidation,
};
