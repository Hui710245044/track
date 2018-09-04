<template>
  <div class="box">
    <!--left-->
    <div>
      <left-search class="mb-10" @search="search" :search_data="search_data"></left-search>
      <left-table :tableData="tableData"></left-table>
      <!--分页-->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20,50, 100, 150, 200]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="count">
        </el-pagination>
      </div>
    </div>
  <!--right-->
    <div>
        <right-tabs></right-tabs>
    </div>
  </div>
</template>

<script>
  import actions from './actions'
  export default {
    data() {
      return {
        actions:actions,
        count:0,
        search_data:{
          page:1,
          pageSize:20,
          search_val:'',
        },
        tableData:[],
        currentPage:1,
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
        this.search();
      },
      search(){
        this.actions.search.call(this,this.search_data);
        // console.log(this);
      },
      handleSizeChange(val) {
        this.search_data.pageSize = val;
        this.init();
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.search_data.page = val;
        this.init();
        // console.log(`当前页: ${val}`);
      }
    },
    components: {
      leftSearch: require('./left/left-search.vue').default,
      leftTable: require('./left/left-table.vue').default,
      rightTabs: require('./right/right-tabs.vue').default,
    }
  }

</script>

<style lang="stylus">
  .block{
    margin-top:20px;
    display:flex;
    justify-content:flex-end;
    .el-pagination__jump{
      cursor:pointer;
    }
  }
  .box {
    display: flex;
    >div {
      flex: 1;
      margin-right:10px;
    }
    .mb-10{
        margin-bottom:10px;
    }
  }

</style>
