import sequelize from '../mysql';
import Sequelize from 'sequelize';

const transport_mode = sequelize.define('transport_mode', {
    logistic_id:{ // 物流商id
        type:Sequelize.DataTypes.STRING
    },
    code :{ //运输方式 code
        type:Sequelize.DataTypes.STRING
    },
    type:{  // 运输类型
        type:Sequelize.DataTypes.SMALLINT
    },
    name:{  // 运输名称
        type:Sequelize.DataTypes.STRING
    },
});

export default transport_mode;