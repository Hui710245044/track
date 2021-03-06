import sequelize from '../mysql';
import Sequelize from 'sequelize';

const clientTopic = sequelize.define('client_topic', {
    client_id:{
        type:Sequelize.DataTypes.INTEGER
    },
    topic:{
        type:Sequelize.DataTypes.STRING
    },
});

export async function subscribe(clientId, topic) {
    const one = await clientTopic.findOne({
        where: {
            client_id:clientId,
            topic:topic,
        }
    });
    if (one) {
        return false;
    } else {
        await clientTopic.create({
            client_id:clientId,
            topic:topic,
        });
        return true;
    }
}

export async function unsubscribe(clientId, topic){
    const one = await clientTopic.findOne({
        where: {
            client_id:clientId,
            topic:topic,
        }
    });
    if (one) {
        await one.destroy();
        return true;
    } else {
        return false;
    }
}

export async function subscribe_clients(topic) {
    const clientTopics = await clientTopic.findAll({
        where: {
            topic
        }
    });
    return clientTopics.map(clientTopic => clientTopic.client_id);
}