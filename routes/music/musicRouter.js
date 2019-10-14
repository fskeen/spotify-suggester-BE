const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../auth/secrets');

const musicDB = require('./musicModel.js');
// const authenticate = require('../auth/middleware.js'); NEED NAMED EXPORT/IMPORT

//router endpoints here

module.exports = router;