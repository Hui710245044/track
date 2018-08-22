<template>
  <div>
    <head-panel></head-panel>
    <table-show></table-show>
  </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
      components:{
          headPanel:require('./head-panel.vue').default,
          tableShow:require('./table-show.vue').default,
      }
    }
</script>

<style lang="stylus">

</style>
