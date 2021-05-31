const express = require( 'express' );
const sequelize = require('./config/connection');
const routes = require( './controllers/' );
const path = require( 'path' );
const exphbs = require( 'express-handlebars' );
const hbs = exphbs.create( {  } );
const app = express();
const PORT = process.env.PORT || 3001;
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.engine( 'handlebars', hbs.engine );
app.set( 'view engine', 'handlebars' );
app.use( routes );




// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });  
});
