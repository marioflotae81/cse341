const routes = require('express').Router();
const controllers = require('../controllers/index');

routes.get('/', controllers.homeRoute);
routes.get('/mario', controllers.marioRoute);
routes.get('/luigi', controllers.luigiRoute);
routes.get('/contacts', controllers.contactsRoute);
routes.get('/contacts/:id', controllers.singleContactRoute);

module.exports = routes