const routes = require('express').Router();
const controllers = require('../controllers/index');

routes.get('/', controllers.homeRoute);
routes.get('/mario', controllers.marioRoute);
routes.get('/luigi', controllers.luigiRoute);
routes.get('/contacts', controllers.contactsRoute);
routes.get('/contacts/:id', controllers.singleContactRoute);
routes.post('/contacts', controllers.postRoute);
routes.put('/contacts/:id', controllers.putRoute);
routes.delete('/contacts/:id', controllers.deleteRoute);

module.exports = routes