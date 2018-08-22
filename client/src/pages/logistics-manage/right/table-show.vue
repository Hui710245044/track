<template>
  <div class="right-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="code" label="代码" align="center">
      </el-table-column>

      <el-table-column prop="id" label="名称" align="center">
      </el-table-column>

      <el-table-column prop="type" label="类型" align="center">
      </el-table-column>

      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click.native="lookUp(scope.row,1)" type="text">查看</el-button>
          <span> | </span>
          <el-button type="text" @click.native="lookUp(scope.row,0)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <check-layer :title="title" :addEditform="addEditform" @update="update" v-model="showDialog" :type="this.type"></check-layer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDialog:false,
        addEditform: {
        },
        type:0,
        title:'',
      }
    },
    props: {
      tableData: {
        type:Array,
      },
    },
    methods:{
      lookUp(row,type) {
        this.type = type;
        this.title = type?'查看':'编辑'
        this.showDialog = true;
        this.addEditform = row;
        // console.log('a',row);
      },
      update(type) {
        // console.log(type);
        this.showDialog = false;
      },
    },
    components:{
      checkLayer:require('./check-layer.vue').default
    }
  }
</script>
