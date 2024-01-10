const { Router } = require("express");
const router = Router();
const getDriverById = require('../controllers/getDriverById');
const getDrivers = require('../controllers/getDrivers');
const getDriversByName = require('../controllers/getDriversByName');
const getTeams = require('../controllers/getTeams');
const postDrivers = require('../controllers/postDrivers');


router.get('/drivers', getDriversByName);
router.get('/drivers/teams', getTeams);
router.get('/drivers/:id', getDriverById);
router.post('/drivers', postDrivers);

module.exports = router;