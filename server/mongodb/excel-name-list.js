import ExcelName from '../model/excel-name'


// 创建
async function createExcelName(doc){
    console.log(doc);
    ExcelName.create(doc).then((root)=>{
        console.log(root);
    });
}

async function findExcelName() {
    let find = await ExcelName.find();
    console.log(find);
    return find;
}

export {
    createExcelName,
    findExcelName
}