const Sequelize = require('sequelize');
const sequelize = new Sequelize('tracking_number', 'root', 'rondaful',{
    host: '172.18.8.246',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'
});
export default sequelize;