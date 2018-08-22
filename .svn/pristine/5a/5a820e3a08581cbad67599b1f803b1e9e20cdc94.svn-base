<template>
  <div class="left-search">
    <el-row>
      <el-card shadow="never" :body-style="{ padding: '6px'}" class="align_center">
        <el-col :span="10">
          <span>物流商</span>
        </el-col>
        <el-col :span="14" class="left-btn">
          <el-input v-model="search_data.search_val" placeholder="" size="mini" class="input-left"></el-input>
          <el-button type="primary" size="mini" class="search-btn" @click="$emit('search')">搜索</el-button>
          <el-button type="primary" size="mini">添加</el-button>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      search_data:''
    },
  }
</script>

<style lang='stylus'>
  .left-search{
    .left-btn {
      display: flex;
      justify-content: flex-end
    }
    .search-btn{
      margin-left: 10px;
    }
    .input-left {
      width: 200px;
    }
    .align_center {
      .el-card__body {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
