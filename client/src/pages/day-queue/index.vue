<template>
  <div>
    <!--搜索面板-->
    <queue-search @search="search" :search_data="search_data"></queue-search>
    <br>
    <!--找事表格-->
    <queue-table :tableData="tableData"></queue-table>
    <!--分页-->
    <br>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20,50,100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        panes: [],
        value1: '',
        value2: '',
        currentPage: 1,
        search_data: {
          pageSize: 20,
          page: 1,
          search_val: '',
        },
        count: 0,
        tableData: [],
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.search();
      },
      search() {
        this.$http.get('/day-queue-panes', {params: this.search_data}).then(res => {
          console.log(res);
          this.tableData = res.data.rows;
          this.count = res.data.count;
        })
      },
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.init();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.init();
      }
    },
    components: {
      queueSearch: require('./queue-search').default,
      queueTable: require('./queue-table').default,
    }
  }
</script>

<style scoped>
  .block {
    display: flex;
    justify-content: flex-end;
  }
</style>
