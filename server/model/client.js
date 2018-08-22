import sequelize from '../mysql';
import Sequelize from 'sequelize';

const Client = sequelize.define('client', {
    service:{
        type:Sequelize.DataTypes.STRING
    },
});

export async function service(clientId) {
    const one = await Client.findOne(clientId);
    if (one) {
        return {serivce:one.service,port:one.port};
    } else {
        return false;
    }
}

export async function addClient(service) {
    const isExist = !!await Client.findOne({
        where:{
            service,
        }
    });
    if(!isExist){
        await Client.create({
            service,
        });
        return true;
    }else{
        return false;
    }
}

export async function delClient(service) {
    const client = await Client.findOne({
        where:{
            service,
        }
    });
    if(client){
        await client.destroy();
        return true;
    }else{
        return false;
    }
}

