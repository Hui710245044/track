import sequelize from '../mysql';
import Sequelize from 'sequelize';

const TracknumberDay = sequelize.define('tracknumber_day', {
    day:{
        type:Sequelize.DataTypes.DATE
    },
    channel :{ //物流商
        type:Sequelize.DataTypes.INTEGER
    },
    tracknumber:{  //跟踪号
        type:Sequelize.DataTypes.STRING
    },
    status:{  //状态
        type:Sequelize.DataTypes.SMALLINT
    }
});
export default TracknumberDay;