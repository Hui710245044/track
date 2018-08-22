<template>
  <div class="transport-info">
    <el-card shadow="never">
      <el-row>
        <span>物流简称:</span>
        <el-input :disabled="disabled" v-model="id"></el-input>
        <span class="input-margin">物流代码:</span>
        <el-input :disabled="disabled"></el-input>
      </el-row>
      <el-row class="row-margin">
        <span :disabled="disabled">物流全名:</span>
        <el-input :disabled="disabled"></el-input>
        <span class="input-margin">物流站点:</span>
        <el-input :disabled="disabled"></el-input>
      </el-row>
      <el-row class="row-margin">
          <span>收件地址:</span>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            :disabled="disabled"
            style="width:550px;"
            >
          </el-input>
      </el-row>

      <el-button type="primary" class="edit-btn"
                 v-if="disabled" @click="edit">编辑</el-button>
      <el-button type="primary" class="edit-btn" v-if="!disabled">修改</el-button>
      <!--<el-button type="primary" class="edit-btn" v-if="!disabled">确定</el-button>-->
      <el-button type="primary" class="edit-btn" v-if="!disabled" @click="disabled=!disabled">取消</el-button>
    </el-card>
  </div>
  <!--id:{{id}}-->

</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        disabled:true,
      }
    },
    computed:{
      ...mapGetters({
        id:'_id'
      })
    },
    methods:{
      edit(){
        this.disabled=!this.disabled;
      }
    }
  }
</script>
<style lang="stylus">
  .transport-info{
    .el-input--mini{
        width:200px;
    }
    span{
      font-size:14px;
    }
    .text-center{
      text-align:center;
    }
    .row-margin{
      margin-top:10px;
    }
    .input-margin{
      margin-left:80px;
    }
    .edit-btn{
      margin-top:10px;
    }
  }

</style>
