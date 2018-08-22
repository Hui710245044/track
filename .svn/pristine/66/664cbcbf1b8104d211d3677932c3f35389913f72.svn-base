<template>
  <div class="right-tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs-color">
        <el-tab-pane label="物流商信息" name="first">
          <transport-info></transport-info>
        </el-tab-pane>
        <el-tab-pane label="运输方式" name="second">
          <transport-way></transport-way>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first',
            }
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        components: {
            transportInfo: require('./transport-info.vue').default,
            transportWay: require('./transport-way.vue').default,
        }
    }
</script>
<style lang="stylus">
  .right-tabs{
    .tabs-color{
      .el-tabs__nav-scroll {
        background: #E4E8F1;
      }
    }
    .el-tabs__nav{
      margin-left:10px;
    }
  }
</style>
