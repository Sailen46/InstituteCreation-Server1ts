import { Sequelize } from "sequelize-typescript";


const sequelize = new Sequelize ({
    database: process.env.DB_NAME, //database name
    username: process.env.DB_USERNAME, //database username mysql default username is root in mysql
    password: process.env.DB_PASSWORD, //database password mysql default password is empty in mysql
    host: process.env.DB_HOST,//location of the database, in local system it is localhost
    dialect: "mysql",//database dialect mysql, postgres, sqlite, mssql which one you are using
    port: Number (process.env.DB_PORT), //port number, by default mysql runs on 3306 port
    models: [__dirname + "/models"] //path of the models files from where we want to import the models and create tables
})

sequelize.authenticate()
.then(()=>{
    console.log("Database connected successfully.");
})
.catch((error)=>{
    console.log("Unable to connect the database:", error);
})


//Migrating the models or creating the tables in the database if they do not exist
sequelize.sync({alter : false})
.then(()=>{
    console.log("All models(tables) are synchronized or Migrated successfully with Database.");
})
.catch((error)=>{
    console.log("Error synchronizing the models(tables) or Unable to Migrate:", error);
})


export default sequelize;