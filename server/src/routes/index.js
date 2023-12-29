const { Router } = require("express");
const router = Router();
const getDriverById = require('../controllers/getDriverById');
const getDrivers = require('../controllers/getDrivers');
const getDriversByName = require('../controllers/getDriversByName');
const getTeams = require('../controllers/getTeams');
const postDrivers = require('../controllers/postDrivers');

router.get('/drivers/:id', getDriverById);
router.get('/drivers', getDrivers);
router.get('/drivers/name?=', getDriversByName);
router.get('/drivers/teams', getTeams);
router.post('/drivers', postDrivers);

module.exports = router;