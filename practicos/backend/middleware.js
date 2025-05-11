//MIDDLEWAR DE VALIDACION DE SESION
const validationMiddleware = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (token === process.env.TOKEN) {
      next()
    } else {
      return res.status(401).json({message: 'Token inválido o faltante'});
    }
  } catch (err) {
    return res.status(401).json({message: 'Token inválido o faltante'});
  }
}

module.exports = {
  validationMiddleware,
}