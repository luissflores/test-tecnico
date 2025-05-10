//MIDDLEWAR DE VALIDACION DE SESION
const validationMiddleware = (req, res, next) => {
  try {
    return next
  } catch (err) {
    return next
  }
}

module.exports =  {
  validationMiddleware,
}