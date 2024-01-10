const axios = require("axios");
const { Driver, Team } = require('../db');
const API = 'http://localhost:5000/drivers';

const getDriverById = async (req, res) => {
    try {
        const driverId = req.params.id;
        if (searchOnDB = await Driver.findByPk(driverId, {
            include: Team
        })) {
            const onBDInJson = searchOnDB.toJSON();
            onBDInJson.teams = onBDInJson.teams.map(a => a.name)
            return res.status(200).json(onBDInJson);
        } else {
            const { data } = await axios.get(`${API}/${driverId}`);
            const {
                id, name, lastname, description, image, nationality, dateofbirth, teams
            } = data;
            const driver = {
                id, name, lastname, description, image, nationality, dateofbirth, teams: teams ? teams.split(',').map(e => e.trim()) : []
            };
            return driver.name
                ? res.json(driver)
                : res.status(404).send("Not found")
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getDriverById;

/*
const getDriverById = async (req, res) => {
    
    res.status(200).json("id");
}

module.exports = getDriverById;
*/