const bcrypt = require('bcrypt-nodejs')

module.exports = (app) => {
  const { existsOrError, equalsOrError, notExistsOrError } = app.api.validation
  const encryptPassowrd = (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }
  const save = async (req, res) => {
    const user = { ...req.body }
    if (req.params.id) user.id = req.params.id

    try {
      existsOrError(user.name, 'Nome não informado')
      existsOrError(user.email, 'E-mail não informado')
      existsOrError(user.password, 'Senha não informada')
      existsOrError(user.confirmPassword, 'Confirme sua senha')
      equalsOrError(
        user.password,
        user.confirmPassword,
        'Senhas precisam ser iguais'
      )

      const userFromDB = await app
        .db('users')
        .where({ email: user.email })
        .first()
      if (!user.id) {
        notExistsOrError(userFromDB, 'Usuário já cadastrado')
      }
    } catch (msg) {
      return res.status(400).send(msg)
    }
    user.password = encryptPassowrd(user.password)
    delete user.confirmPassword

    if (user.id) {
      app
        .db('users')
        .update(user)
        .where({ id: user.id })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err))
    } else {
      app
        .db('users')
        .insert(user)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err))
    }
  }

  const get = (req, res) => {
    app
      .db('users')
      .select('id', 'name', 'email', 'admin')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send(err))
  }

  const getById = (req, res) => {
    app
      .db('users')
      .select('id', 'name', 'email', 'admin')
      .where({ id: req.params.id })
      .first()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send(err))
  }

  return { save, get, getById }
}
