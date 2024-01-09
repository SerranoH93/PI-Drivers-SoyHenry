const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false }).then(async (sequelize) => { //! force: true CREA LA DB
  //* Se inicializa el id en 700 pero solo si no existe un elemento dentro de la tabla
  const element = await sequelize.models.Driver.findOne();
  if (!element) {
    sequelize.query(`alter sequence drivers_id_seq restart with 700`);
  }
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
