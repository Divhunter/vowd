// Importations
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const limit = require('../middleware/logLimit');
const { route } = require('./post.routes');

// Réglage des contrôleurs
router.post('/register', userCtrl.register);
router.post('/login', limit.limiter, userCtrl.login);
router.post('/sendMail', userCtrl.sendMail);
router.post('/updatePassword', userCtrl.updatePassword);

// Exportation du Router pour pouvoir y acceder depuis un autre fichier
module.exports = router;