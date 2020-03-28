const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//routes.get('/ongs', async(request, response) =>{
//    const ongs = await connection('ongs').select('*');

//    return response.json(ongs);
//});

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', OngController.index);
routes.post('/incidents', OngController.create);
routes.delete('/incidents/:id', IndicentController.delete);

module.exports = routes;