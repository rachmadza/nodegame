const { Router } = require('express');

const {login} = require('../controllers/controller');

exports.route = new Router()

  .post('/login', login)