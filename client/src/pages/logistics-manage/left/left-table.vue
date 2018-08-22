<template>
    <div class="left-table">
        <el-table
                :data="tableData"
                border
                @cell-click="handle_cell"
                highlight-current-row>
            <el-table-column
                    prop="id"
                    label="物流名称"  align="center">
            </el-table-column>
            <el-table-column
                    prop="code"
                    label="物流代码" align="center">-
            </el-table-column>
            <el-table-column
                    prop="create_time"
                    label="添加/修改时间" align="center">
            </el-table-column>
        </el-table>
      <!--id:{{id}}-->
    </div>
</template>

<script>
     import {mapActions,mapGetters} from 'vuex'
    export default {
        data() {
            return {
            }
        },
        props:{
          tableData:''
        },
      computed:{
        ...mapGetters({
          id:'_id'
        })
      },
       methods:{
         ...mapActions({
           change_id:'_id1',
         }),
         handle_cell(val){
            console.log('handle_cell',val);
           this.change_id(val.id)
         },
       },
    }
</script>

<style lang="stylus">

</style>
