/* const {
  Shop,
  sequelize,
  Reviews,
  Users,
  Comments,
  Post,
  Product,
} = require('./src/db.js');

const fs = require('fs');
const flags = require('./flags.json');
  
const seeder = async () => {
    /* try {
      // Comprobar si la bandera de seeder ya está establecida
      const seeded = await sequelize.getQueryInterface().showIndex({ tableName: 'shops', schema: 'public', indexName: 'shops_seeded_flag' });
  
      // Si la bandera está presente, salir de la función
      if (seeded && seeded.length > 0) {
        console.log('Los datos de la tienda ya se han cargado anteriormente');
        return;
      }
  
      // Cargar los datos de la tienda
      await Shop.bulkCreate(tiendas);
  
      // Establecer la bandera de seeder
      await sequelize.getQueryInterface().addIndex('shops', {
        fields: ['seeded'],
        name: 'shops_seeded_flag'
      });
  
      console.log('Datos de la tienda cargados correctamente');
    } catch (error) {
      console.log(error);  
    } */
   


/* 
const tables = [
  { fileName: './src/archivosJson/users.json', model: Users, flag: 'users' },
  { fileName: './src/archivosJson/shopsD.json', model: Shop, flag: 'shops' },
  { fileName: './src/archivosJson/comments.json', model: Comments, flag: 'comments' },
  { fileName: './src/archivosJson/mock_posts.json', model: Post, flag: 'posts' }  
];

for (let table of tables) {
  if (flags[table.flag]) {
    console.log(`Datos de la tabla ${table.model.name} ya han sido cargados previamente 💛`);
     continue; 
  }
  
  try {
    const data = fs.readFileSync(table.fileName, 'utf-8');
    const jsonData = JSON.parse(data);
    await table.model.bulkCreate(jsonData);
    console.log(`Datos cargados exitosamente en la tabla ${table.model.name} ✅`);
    
    // Actualizar el flag
    flags[table.flag] = true;
    fs.writeFileSync('./flags.json', JSON.stringify(flags));
    
  } catch (error) {
    console.error(`Error al cargar datos en la tabla ${table.model.name}: ${error}`);
  }
}
   
  };


  const seederReviews = async () => {
    if (!flags.reviews) {
      try {
        const data = fs.readFileSync('./src/archivosJson/reviews.json', 'utf-8');
        const usuarios = JSON.parse(data);
        await Reviews.bulkCreate(usuarios);
        console.log('Datos cargados exitosamente en la tabla reviews ✅'); //emoji 
        flags.reviews = true;
        fs.writeFileSync('./flags.json', JSON.stringify(flags));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Datos de reviews ya cargados previamente 💛');
    }
  };
  
  const seederProducts = async () => {
    if (!flags.products) {
      try {
        const data = fs.readFileSync('./src/archivosJson/products.json', 'utf-8');
        const usuarios = JSON.parse(data);
        await Product.bulkCreate(usuarios);
        console.log('Datos cargados exitosamente en la tabla Product ✅'); //emoji 
        flags.products = true;
        fs.writeFileSync('./flags.json', JSON.stringify(flags));
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log('Datos de products ya cargados previamente 💛');
    }};  

  
  
  module.exports ={ seeder, seederReviews,seederProducts}; */
