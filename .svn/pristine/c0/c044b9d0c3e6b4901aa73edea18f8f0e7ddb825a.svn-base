
export async function get_list(table,where = {}, page = 1, pageSize = 20){
    page = parseInt(page);
    pageSize = parseInt(pageSize);
    return await table.findAndCountAll({
        where,
        limit: pageSize,
        offset:(page - 1) * pageSize
    });
};
export async function get_info(table,data){
    return await table.findOne({where:{id:data.id}});
};
export async function add(table,data){
    return await table.create(data);
};
export async function update(table,data){
    let find= await table.findOne({where:{id:data.id}});
    if(find){
        Object.assign(find,data)
        await find.save();
    }
};
export async function del(table,id){
    let find= await table.findOne({where:{id}});
    if(find){
        await find.destroy();
    }
}