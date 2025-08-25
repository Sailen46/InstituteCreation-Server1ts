
import app from "./src/app"
import config = require("./src/config/config")
import sequelize from "./src/database/connection" // or we can do import "./src/database/connection"
sequelize.sync({alter:true})



const startServer = () => {
    const port = config.envConfig.portNumber
    app.listen(port,()=>{
        console.log(`Server has started at port ${port}.`)
    })
}
startServer()