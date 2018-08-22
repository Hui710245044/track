import sequelize from '../mysql';
import Sequelize from 'sequelize';

const trackLog = sequelize.define('tracking_log', {
    track: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
    },
    log: {
        type: Sequelize.DataTypes.STRING,
        get() {
            return JSON.parse(this.getDataValue('log'));
        },
        set(val) {
            this.setDataValue('log', JSON.stringify(val));
        }
    }
});

export async function set_log(track, log) {
    const one = await trackLog.findOne({
        where: {
            track
        }
    });
    if (one) {
        one.logs = log;
        await one.save();
    } else {
        await trackLog.create({
            track,
            log
        });
    }
}

export async function get_log(track) {
    return await trackLog.findOne({
        wher: {track}
    });
}