import sequelize from '../mysql';
import Sequelize from 'sequelize';

const TrackTag = sequelize.define('tracking_tag', {
    type:{
        type:Sequelize.DataTypes.SMALLINT
    },
    value:{
        type:Sequelize.DataTypes.STRING
    }
});

export default TrackTag;