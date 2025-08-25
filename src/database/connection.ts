import { Sequelize } from "sequelize";

const sequelize = new Sequelize ({
    database: process.env.DB_NAME, //database name
    username: process.env.DB_USERNAME, //database username mysql default username is root in mysql
    password: process.env.DB_PASSWORD, //database password mysql default password is empty in mysql
    host: process.env.DB_HOST,//location of the database, in local system it is localhost
    dialect: "mysql",//database dialect mysql, postgres, sqlite, mssql which one you are using
    port: Number (process.env.DB_PORT), //port number, by default mysql runs on 3306 port
})

sequelize.authenticate()
.then(()=>{
    console.log("Database connected successfully.");
})
.catch((error)=>{
    console.log("Unable to connect the database:", error);
})


export default sequelize;