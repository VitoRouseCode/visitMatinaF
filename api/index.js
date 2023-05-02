const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { swaggerDocs } = require('./src/routes/swagger.js');
const { seeder, seederReviews, seederProducts } = require('./seeder.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  //await saveApi();
  console.log('Db connected...');
  async function startServer() {
    try {
     /*  await seeder(); */ // Llama a la función de seeder
      /* await dos(); */
      console.log('funcion seeder ejecutada..');
      /* await seederReviews();
      await seederProducts(); */
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }

    server.listen(3001, () => {
      console.log('Server listening at 3001'); // eslint-disable-line no-console
      swaggerDocs(server, 3001);
    });
  }

  // Llama a la función asíncrona
  startServer();
});
