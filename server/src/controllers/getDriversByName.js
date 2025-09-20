const axios = require("axios");
const getDrivers = require('../controllers/getDrivers')
const { Driver, Team } = require('../db');
const { Op } = require("sequelize");
const API = 'http://localhost:5000/drivers';


const getDriversByName = async (req, res) => {
    try {
        const searchName = req.query.name;
        if (!searchName) {
            return getDrivers(req, res);
        }
        const driversFromDB = await Driver.findAll({
            where: {
                'name': {
                    [Op.iLike]: `%${searchName}%`
                }
            },
            include: Team
        });
        const { data } = await axios.get(API);
        const driversFromAPI = data.filter(driver => {
            return new RegExp(searchName, 'i').test(driver.name.forename);
        })
        const newDriversList = driversFromAPI.map(driver => ({
            id: driver.id,
            name: driver.name.forename,
            surname: driver.name.surname,
            image: driver.image.url,
            nationality: driver.nationality,
            teams: driver.teams ? driver.teams.split(',').map(e => e.trim()) : [], //e.trim quita espacios en blanco inicio y al final
            description: driver.description,
        }));
        const allDrivers = driversFromDB.concat(newDriversList);
        if (allDrivers.length > 15) {
            allDrivers.slice(0, 15);
        }
        return res.status(200).json(allDrivers);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = getDriversByName;