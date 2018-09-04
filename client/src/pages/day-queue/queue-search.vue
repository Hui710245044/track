<template>
  <div>
    <el-card>
      <div>
        <span>跟踪号 :</span>

        <el-input v-model="search_data.search_val" class="input-lg"></el-input>

        <span>跟踪日期 :</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          class="date-length">
        </el-date-picker>

        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="选择日期"
          class="date-length">
        </el-date-picker>

        <el-button type="primary" class="search-que" @click="$emit('search')" size="mini">搜索</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          panes: [],
          value1: '',
          value2: '',
        }
      },
      props:{
        search_data:''
      }

    }
</script>

<style scoped>
  .input-lg{
    width:200px;
  }
  .date-length{
    width:150px;
  }
</style>
