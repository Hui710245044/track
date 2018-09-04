<template>
    <div class="day-queue">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="track_nub"
          label="跟踪号"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="track_date"
          label="跟踪日期"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="logistics_buss"
          label="物流商">
        </el-table-column>
        <el-table-column
          prop="transport_mode"
          label="运输方式">
        </el-table-column>
        <el-table-column
          prop="logistics_status"
          label="跟踪状态">
        </el-table-column>
        <el-table-column
          prop="remarks"
          label="备注">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      data() {
        return {
        }
      },
      props:{
        tableData:''
      },
    }
</script>

<style lang="stylus">
  .day-queue{
    .cell {
      text-align: center;
    }
  }
</style>
