<template>
  <div class="reptile-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" align="center">
      </el-table-column>
      <el-table-column prop="platform" label="平台" width="180">
      </el-table-column>
      <el-table-column prop="station" label="站点">
      </el-table-column>
      <el-table-column prop="keyword" label="关键字">
      </el-table-column>
      <el-table-column prop="catch_type" label="抓取类型">
      </el-table-column>
      <el-table-column prop="catch_time" label="抓取时间">
      </el-table-column>
      <el-table-column prop="new_time" label="最新时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click.native="lookUp" type="text">查看</el-button>
          <span> | </span>
          <el-button type="text" @click="dialogFormVisible = true">设置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="设置" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="抓取频率 :" :label-width="formLabelWidth">
          <el-select v-model="form.frequency" placeholder="请选择">
            <el-option label="一周" value=""></el-option>
            <el-option label="2周" value=""></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <ui-layer v-model="checkTable"></ui-layer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkTable: false,
        tableData: [{
          id: '1',
          platform: 'Ebay',
          station: 'US',
          keyword: 'XXX',
          catch_type: '关键字',
          catch_time: '2018-7-10',
          new_time: '2018-7-10',
        }],
        form: {
          frequency: '',
        },
        dialogFormVisible: false,
        formLabelWidth: '120px',
      }
    },
    methods: {
      lookUp() {
        this.checkTable = true
      }
    },
    components: {
      uiLayer: require('./ui-layer.vue').default,
    }
  }
</script>

<style lang="stylus">
  .reptile-table {
    .el-dialog__wrapper .el-dialog .el-dialog__header {
      box-shadow: 1px 1px 1px #ccc;
      -webkit-box-shadow: 1px 1px 1px #ccc;
      -moz-box-shadow: 1px 1px 1px #ccc;
    }
 /*   .el-input__inner {
           width: 120px;
         }*/
    .cell {
      text-align: center;
    }
  }
</style>
