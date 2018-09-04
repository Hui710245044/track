import sequelize from '../mysql';
import Sequelize from 'sequelize';

const queue = sequelize.define('day-queue-panes', {
    track_nub:{ //跟踪号
        type:Sequelize.DataTypes.BIGINT
    },
    track_date :{ //跟踪日期
        type:Sequelize.DataTypes.BIGINT
    },
    logistics_buss :{ //物流商
        type:Sequelize.DataTypes.BIGINT
    },
    transport_mode :{ //运输方式
        type:Sequelize.DataTypes.BIGINT
    },
    logistics_status :{ //跟踪状态
        type:Sequelize.DataTypes.BIGINT
    },
    remarks :{ //备注
        type:Sequelize.DataTypes.BIGINT
    },
    created_at:{  // 时间
        type:Sequelize.DataTypes.DATE
    },
    updated_at:{  // 时间
        type:Sequelize.DataTypes.DATE
    },
},{timestamps: false});

export default queue;