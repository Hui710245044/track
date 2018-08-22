<template>
  <div class="reptile-system">
    <el-card shadow="always" :body-style="{ padding: '10px' }">
      <el-row :gutter="13">
        <el-col :span="3">
          <span>平台:</span>
          <el-select v-model="value1">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <span>站点:</span>
          <el-select v-model="value2">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <el-select v-model="value3">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-input v-model="input3" id="input-leng"></el-input>
        </el-col>
        <el-button type="primary">搜索</el-button>
      </el-row>
    </el-card>
    <el-button type="primary" @click="dialogFormVisible = true" class="add-btn">添加</el-button>
    <el-dialog title="添加数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="平台 :" :label-width="formLabelWidth">
          <el-select v-model="value1">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="站点 :" :label-width="formLabelWidth">
          <el-select v-model="value2">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item >
          <el-select v-model="value3">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input class="keyword-input"></el-input>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="抓取频率 :" :label-width="formLabelWidth">
          <el-select v-model="form.frequency">
            <el-option label="1周" value="one"></el-option>
            <el-option label="2周" value="two"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button type="primary">抓取数据</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options1: [{
          value: '选项1',
          label: 'Ebay'
        }, {
          value: '选项2',
          label: 'aliexpress'
        }],
        options2: [{
          value: '选项1',
          label: 'US'
        }, {
          value: '选项2',
          label: 'CA'
        }],
        options3: [{
          value: '选项1',
          label: '关键字'
        }, {
          value: '选项2',
          label: '店铺'
        }],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
        },
        value1: '选项1',
        value2: '选项1',
        value3: '选项1',
        input3:'',
      }
    },
    components: {},
  }
</script>

<style lang="stylus">
  .reptile-system{
    .el-input__inner{
      width:150px;
    }
    #input-leng{
      width:295px;
      margin-left: 30px;
    }
    .el-form{
      margin-left:25%;
    }
    .add-btn{
      margin-top:10px;
      margin-bottom:10px;
    }
    .el-dialog__header{
      box-shadow:1px 1px 1px #ccc;
      -webkit-box-shadow: 1px 1px 1px #ccc;
      -moz-box-shadow: 1px 1px 1px #ccc;
    }
     .el-form-item__content{
       display:flex;
       }
    .keyword-input{
      margin:0px 10px;
      width:200px;
    }
  }
  </style>
