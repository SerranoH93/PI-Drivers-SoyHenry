const { Driver, Team } = require('../db');

const postDriver = async (req, res) => {
    try {
        const { name, lastname, description, image, nationality, dateofbirth, teams } = req.body;
        if (name && lastname && description && image && nationality && dateofbirth) {
            const newDriver = await Driver.create({
                name, lastname, description, 
                image, nationality, dateofbirth
            });

            if (teams && teams.length) {
                for (let i = 0; i < teams.length; i++) {
                    const teamId = teams[i];
                    const team = await Team.findByPk(teamId);
                    await newDriver.addTeam(team);
                }
            }
            const recentDriver = Driver.findAll();
            return res.status(200).json(recentDriver);
        }
        return res.status(404).send("Faltan datos");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postDriver;


/*const postDrivers = async (req, res) => {
    
    res.status(200).json("drivers");
}

module.exports = postDrivers;
*/