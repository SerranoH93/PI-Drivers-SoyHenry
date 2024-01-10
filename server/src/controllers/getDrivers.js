const axios = require("axios");
const { Driver, Team } = require('../db');
const { Op } = require("sequelize");
const API = 'http://localhost:5000/drivers';

const getDrivers = async (req, res) => {
    try {
        //*Se obtiene drivers desde local
        const localDrivers = await Driver.findAll( {include: Team})
        const localDriversToJSON = localDrivers.map(driver => {
            return {
                ...driver.toJSON(),
                teams: driver.teams.map(team => {
                    return team.name;
                })
            }
        })
        //*Se obtiene drivers desde la API
        const { data } = await axios.get(API); 
        const driversFromAPI = data.map(driver => ({
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            dateofbirth: driver.dob,
            teams: driver.teams ? driver.teams.split(',').map(e => e.trim()) : []
        }));
        const driversGotten = [...driversFromAPI, ...localDriversToJSON];
        return res.status(200).json(driversGotten);
    } catch (error) {
        return res.status(500).send(error.message);
    }     
};

module.exports = getDrivers;



/*const getDrivers = async (req, res) => {
    
    res.status(200).json("drivers");
}

module.exports = getDrivers;
*/