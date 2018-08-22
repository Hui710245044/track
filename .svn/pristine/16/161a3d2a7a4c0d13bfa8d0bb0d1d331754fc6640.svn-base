<template>
    <div class="ui-layer">
      <el-dialog title="查看数据" :visible.sync="checkTable" width="80%">
        <el-card shadow="always">
          <el-row :gutter="10">
            <span>时间 :</span>
            <el-radio-group v-model="radio3" class="radio-group">
              <el-radio-button label="2018年6月24"></el-radio-button>
              <el-radio-button label="2018年6月2"></el-radio-button>
              <el-radio-button label="2018年6月20"></el-radio-button>
              <el-radio-button label="2018年6月10"></el-radio-button>
              <div class="block">
                <el-date-picker
                  v-model="value3"
                  type="datetime"
                  placeholder="选择日期时间"
                  default-time="12:00:00">
                </el-date-picker>
              </div>
            </el-radio-group>
          </el-row>
          <br>
          <el-row :gutter="10">
              <span>商品名称 :</span>
              <el-input v-model="input" class="shop-input"></el-input>
            <el-button type="primary">搜索</el-button>
          </el-row>
        </el-card>
        <el-button type="primary" class="join-marin">加入跟踪队列</el-button>
        <el-table :data="gridData">
          <el-table-column property="id" label="ID" width="150"></el-table-column>
          <el-table-column property="product_name" label="商品名称" width="200"></el-table-column>
          <el-table-column property="product_link" label="商品链接"></el-table-column>
          <el-table-column property="comments" label="评论数"></el-table-column>
          <el-table-column property="orders" label="订单数"></el-table-column>
          <el-table-column property="totals" label="订单数/评论数"></el-table-column>
          <el-table-column property="price" label="价格"></el-table-column>
          <el-table-column property="putaway_time" label="上架时间"></el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
              <el-button @click.native="lookUp" type="text">历史订单</el-button>
              <span> | </span>
              <el-button type="text" @click="dialogFormVisible = true">对比</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block-page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[50,100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"/>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          gridData: [{
            id: '1',
            product_name: '名字',
            product_link: '路径',
            comments: '23',
            orders: '34',
            totals: '65',
            price: '34',
            putaway_time: '2018年6月24',
          },{
            id: '1',
            product_name: '名字',
            product_link: '路径',
            comments: '23',
            orders: '34',
            totals: '65',
            price: '34',
            putaway_time: '2018年6月24',
          },{
            id: '1',
            product_name: '名字',
            product_link: '路径',
            comments: '23',
            orders: '34',
            totals: '65',
            price: '34',
            putaway_time: '2018年6月24',
          },],
          checkTable: this.value,
          radio3: '2018年6月24',
          value3: '',
          currentPage4: 1,
          input:'',

        }
      },
      watch: {
        checkTable(val) {
          this.$emit('input', val);
        },
        value(val) {
          this.checkTable = val;
        }
      },
      props: {
        value: Boolean,
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>

<style lang="stylus">
  .ui-layer{
    .block{
      float:right;
      width:150px;
    }
    .block-page{

    }
    .el-radio-button__inner{
      margin-right:10px;
    }
    .shop-input{
      width:250px;
      margin-right:20px;
    }
    .join-marin{
      margin:10px 0px;
    }
    .is-always-shadow{
      margin-top:-20px;
    }
  }
</style>

