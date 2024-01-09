const axios = require("axios");
const { Driver } = require('../db');
const { Op } = require("sequelize");
const API = 'http://localhost:5000/drivers';


const getDriversByName = async (req, res) => {
    try {
        const searchName = req.query.name;
        if (!searchName) {
            return res.status(500).send('Ingresa datos');
        }
        const driversFromDB = await Driver.findAll({
            where: {
                'name': {
                    [Op.iLike]: `%${searchName}%`
                }
            }
        });
        const { data } = await axios.get(API);
        const driversFromAPI = data.filter(driver => {
            return new RegExp(searchName, 'i').test(driver.name.forename);
        })
        const newDriversList = driversFromAPI.map(element => ({
            id: element.id,
            name: element.name.forename,
            surname: element.name.surname,
            image: element.image.url,
            nationality: element.nationality,
            teams: element.teams,
            description: element.description,
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