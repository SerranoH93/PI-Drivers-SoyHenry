const axios = require("axios");
const { Team } = require('../db');
const API = 'http://localhost:5000/drivers';

const getTeams = async (req, res) => {
    try {
        //* Se obtienen teams de local
        const localTeams = await Team.findAll();

        if (localTeams > 0) {
            return localTeams;
        } else {
            const { data } = await axios.get(API);
            const teamsFromAPI = data.flatMap((driver) => {
                if (driver.teams) {
                    return driver.teams.split(", ").map(team => team.trim());
                }
                return []
            });
            const teamsGotten = [...new Set(teamsFromAPI)].sort();

            const teamsToDB = await Team.bulkCreate(
                teamsGotten.map(team => ({ name: team }))
            );

            return res.status(200).json(teamsToDB.map(team => team.name));
        }      
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getTeams;

/*const getTeams = async (req, res) => {
    
    res.status(200).json("Teams");
}
module.exports = getTeams;*/