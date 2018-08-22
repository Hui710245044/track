<template>
    <div class="transport-css">
        <!-- 搜索面板 -->
        <div class="right-pannel">
            <el-input style="width:200px" v-model="search_right.val"></el-input>
            <el-button type="primary" @click="transportSearch">搜索</el-button>
            <el-button type="primary">同步运输方式</el-button>
            <el-button type="primary" @click.native="lookUp()" >添加</el-button>

        </div>
        <!-- table展示 -->
        <div>
            <table-show :tableData="tableData"></table-show>
        </div>
      <check-layer :title="title" :addEditform="addEditform" @update="update" v-model="showDialog" :type="this.type"></check-layer>
    </div>

</template>
<script>

  import actions from '../actions'

  export default{
        data(){
            return{
              showDialog:false,
              title:'添加',
              addEditform:{},
              actions:actions,
              type:0,
              search_right:{
                 val:'',
               },
              tableData:[],
            }
        },
        components:{
            tableShow: require('./table-show.vue').default,
            checkLayer:require('./check-layer.vue').default,
        },
      mounted(){
          this.init();
      },
      methods:{
          init(){
            this.transportSearch();
          },
          transportSearch(){
           this.actions.transporSearch.call(this);
         },
        lookUp(){
          this.showDialog = true;
        },
        update(){
          this.tableData.unshift(this.addEditform);
          this.showDialog = false;
        },
      }
    }
</script>
<style lang="stylus">
  .transport-css{
    .right-pannel{
      margin-bottom:10px;
      float:right;
      position: relative;
    }
    .tranport-css{
      position:absolute;
    }
  }
</style>
