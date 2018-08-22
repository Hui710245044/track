import sequelize from '../mysql';
import Sequelize from 'sequelize';

const trackNumber = sequelize.define('tracking', {
    track:{ // 追踪号
        type:Sequelize.DataTypes.STRING
    },
    channel :{ //物流商
        type:Sequelize.DataTypes.STRING
    },
    is_online:{  //是否上网
        type:Sequelize.DataTypes.SMALLINT
    },
    is_succ:{  //是否妥投
        type:Sequelize.DataTypes.SMALLINT
    },
    stime:{  // 上网开始时间
        type:Sequelize.DataTypes.DATE
    },
    ptime:{  // 上网截止时间
        type:Sequelize.DataTypes.DATE
    },
    etime:{ // 妥投截止时间
        type:Sequelize.DataTypes.DATE
    },
    from_tag:{  //  来源
        type:Sequelize.DataTypes.INTEGER
    },
});
export default trackNumber;