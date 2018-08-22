<template>
    <div style="height: 50px;">
        <el-button type="primary"  @click="get_order_info">
            加载跟踪号列表
        </el-button>
        <el-pagination style="float: right"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="page"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total=total>
        </el-pagination>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                page: 1,
                pageSize: 50,
                total: 0,
            }
        },
        methods:{
            handleSizeChange(val) {
                this.pageSize = val;
                this.get_order_info();
            },
            handleCurrentChange(val) {
                this.page = val;
                this.get_order_info();
            },
            get_order_info() {
                this.loading = true;
                this.$http.get(`/tracking-list?excelId=${this.excelId}&page=${this.page}&pageSize=${this.pageSize}`).then(res => {
                    this.tableData = res.data.list;
                    this.total = res.data.total;
                    this.loading = false;
                }).catch(fail =>{
                    this.loading = false;
                    this.tableData = [];
                    this.total = 0;
                })
            },
        }
    }
</script>