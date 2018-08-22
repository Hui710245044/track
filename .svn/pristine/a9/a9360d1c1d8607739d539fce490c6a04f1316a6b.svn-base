<template>
    <div>
        <section class="container">
            <div class="file-btn">
                请选择要导入的Excel文件
                <input class="update-excel" type="file"
                       accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                       ref="file" multiple @change="file_change">
            </div>
            <ul class="files">
                <li v-if="files.length > 0" v-for="file in files">
                    <div>
                        <span>{{file.file.name}}</span>
                        <el-tag size="mini"
                                :class="{'error-color':file.errors.length, 'success-color':!file.errors.length && file.result}">
                            {{file.result ? file.result : '未上传'}}
                        </el-tag>
                        <i class="el-icon-circle-close" @click="remove(file)"></i>
                    </div>
                    <ul v-if="file.errors.length > 0" class="error">
                        <li v-for="(error,index) in file.errors" :key="index">
                            {{error}}
                        </li>
                    </ul>
                </li>
                <li v-if="files.length <= 0" class="prompt-message">
                    请选择要导入的文件！
                </li>
            </ul>
            <div class="dialog-footer">
                <el-button type="primary" @click="upload" :disabled="files.length<=0"
                           v-loading.fullscreen.lock="fullscreenLoading"
                           element-loading-text="正在上传请稍后...">
                    导入查询队列
                </el-button>
                <el-select v-model="excelName">
                    <el-option v-for="(item, index) in excelNameList" :key="index" :label="item.name"
                               :value="item.name"></el-option>
                </el-select>
                <el-button type="primary" @click="get_order_info">
                    查看跟踪号列表
                </el-button>
                <el-button type="primary" @click="get_tracking_info">
                    开启查询队列包裹信息
                </el-button>
            </div>
            <div>
                <span>追踪号：</span><el-input style="display: inline-block;width: 300px;"  v-model="tracking"></el-input>
                <el-button type="primary" @click="get_one">查询</el-button>
                <el-button @click="test">test</el-button>
            </div>
        </section>
        <el-table :data="tableData" height="800" border>
            <el-table-column prop="tracking" label="跟踪号" width="300"></el-table-column>
            <el-table-column prop="identify" label="平台标识" width="300"></el-table-column>
            <el-table-column label="是否已上网">
                <template slot-scope="scope">
                    <span>{{scope.row.isOnline?'是':'否'}}</span>
                </template>
            </el-table-column>
            <el-table-column label="是否已妥投">
                <template slot-scope="scope">
                    <span>{{scope.row.isSuc?'是':'否'}}</span>
                </template>
            </el-table-column>
        </el-table>
        <div style="height: 50px;">
            <el-pagination style="float: right"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="page"
                           :page-sizes="[100, 200, 300, 400]"
                           :page-size= "pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total=total>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';


    export default {
        async asyncData () {
            let {data} = await axios.get('/apis/excel-list');
            return {excelNameList: data}
        },
        head () {
            return {}
        },
        data (){
            return {
                fullscreenLoading: false,
                errors: [],
                files: [],
                file: `downfile`,
                file_name: '',
                code: false,
                tableData: [],
                excelName: '',
                page:1,
                pageSize: 100,
                total: 0,
                tracking:''
            }
        },
        filters: {
            format(val){
                let json = JSON.parse(val);
                let obj = json[0];
                if (obj.track === null) {
                    return `<span>未查到改跟踪号信息</span>`
                } else {

                }
            }
        },
        methods: {
            get_one(){
                axios.get(`/api/tracking-list/get-one?tracking=${this.tracking}`).then(res=>{
                    this.tableData = [res.data]
                }).catch(err=>{
                    console.log(err);
                });
            },
            file_change(){
                const files = this.$refs.file.files;
                Object.keys(files).forEach(key => {
                    let file = files[key];
                    console.log(file);
                    if ((/\.(?!(xlsx$|xls$))/.test(file.name))) {
                        this.$message({
                            type: "error",
                            message: "文件类型错误，请选择Excel文件上传！"
                        });
                    } else {
                        this.files.push({file: file, result: '', errors: []});
                    }
                });
                //手动清掉input value
                this.$refs.file.value = '';
            },
            download_file(){

            },
            remove(file){
                const index = this.files.indexOf(file);
                this.files.splice(index, 1);
                console.log(this.$refs.file.files)
            },
            upload(){
                this.fullscreenLoading = true;
                this.files.forEach(({file}) => {
                    let data = {
                        extension: file.name.substring(file.name.lastIndexOf('.') + 1),
                        content: '',
                        name: file.name
                    };
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                        data.content = e.target.result;
                        this.submit(file, data);
                    };
                });
            },
            submit(file, data) {
                const index = this.files.findIndex(f => f.file === file);
                axios.post('/upload/track/excel', data).then(res => {
                    this.fullscreenLoading = false;
                    if (res.data.status === 'success') {
                        this.$message({
                            type: 'success',
                            message: `导入文件成功!`
                        });
                        this.files[index].result = `导入文件成功!`;
                        this.tableData = res.data.result;
                    } else {
                        if (res.msg) {
                            this.files[index].result = "导入有失败！";
                            this.files[index].msg = res.message;
                        }
                    }
                }).catch(code => {
                    this.fullscreenLoading = false;
                    this.files[index].result = "上传有失败！";
                    this.files[index].errors = code.message;
                    console.log('code.message', code.message);
                })

            },
            handleSizeChange(val){
                this.pageSize = val;
                this.get_order_info();
            },
            handleCurrentChange(val){
               this.page = val;
               this.get_order_info();
            },
            get_order_info(){
                console.log(this.excelName);
                axios.get(`/api/tracking-list?excelName=${this.excelName}&page=${this.page}&pageSize=${this.pageSize}`).then(res => {
                    console.log(res);
                    this.tableData = res.data.list;
                    this.total = res.data.total;
                })
            },
            get_tracking_info(){
                axios.get(`api/track/info`).then(res => {
                    console.log(res);
                })

            },
            view_info(val){
                if(val === ''){
                    return `还未查询`
                }
                try{
                    console.log(val);
                    let json = JSON.parse(val);
                    console.log(json);
                    if (json[0].track === null) {
                        return `未查到包裹信息`
                    } else {
                        let z1Arr = json[0].track.z1.map(item => {
                            return {
                                'time': item.a, 'address': item.c, 'status': item.z
                            }
                        });
                        return [
                            {
                                'time': json[0].track.z0 && json[0].track.z0.a,
                                'address': json[0].track.z0 && json[0].track.z0.c,
                                'status': json[0].track.z0 && json[0].track.z0.z
                            },
                            ...z1Arr
                        ]
                    }
                }catch (err){
                    return `解析出错`
                }

            },
            test(){
                axios.post('/apis/erp/post', [{tracking:'ZESZE2020592005YQ', startTime:1520304037, deliveredEndTime:1522896037}]);
            }

        },
        components: {}
    }
</script>

<style scoped>
    .file-btn {
        position: relative;
        display: inline-block;
        background: #409EFF;
        padding: 12px 5px;
        border-radius: 5px;
        color: #fff;
        font-size: 12px;
    }

    .files {
        display: inline-block;
    }

    .update-excel {
        cursor: pointer;
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
    }

    .el-icon-circle-close {
        margin-left: 10px;
        color: #ff272f;
    }

    .error-color {
        background-color: #FF4949;
    }

    .success-color {
        background-color: #13CE66;
    }

    .prompt-message {
        color: #1F2D3D;
    }

    .dialog-footer {
        display: inline-block;
    }
</style>
