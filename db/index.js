// 数据库配置信息
const {Sequelize,DataTypes} = require("sequelize");

const dbConfig = {
    username: 'root',
    host:'47.103.192.224',
    password:'abcd12347890',
    database:'sports_plan',
    dialect: 'mysql' // 'mysql'|'sqlite'|'postgres'|'mssql'

};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    // 设置时区
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});


sequelize
    .authenticate()
    .then(()=>{
        console.log('数据库连接');
        // process.exit(); //结束进程
    })

module.exports = sequelize