const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.homeRoute);
routes.get('/mario', lesson1Controller.marioRoute);
routes.get('/luigi', lesson1Controller.luigiRoute);

module.exports = routes