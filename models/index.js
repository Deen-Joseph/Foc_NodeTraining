const dbConfig = require('../config/dbConfig.js');

const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.Hostname,
        dialect: dbConfig.dialect,        
    }     
)

sequelize.authenticate()
.then(()=>{
    console.log("Connected..")
})
.catch(err=>{
    console.log(" error" + err)
})

const db = {}

db.Sequelize = Sequelize

db.sequelize = sequelize

db.players = require('./playersModels.js')(sequelize, DataTypes)
db.clubs = require('./clubsModels.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})  // if true loss data everytime running app
.then(()=> {
    console.log('sync is done')
})


module.exports = db