<template>
  <div class="label-item">
    <label :style="labelStyls" v-if="label">{{label}}：</label>
    <slot v-else name="label"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "label-item",
    computed:{
      labelStyls(){
        return {

        }
      }
    },
    props: {
      label: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .label-item + .label-item{
    margin-left:15px;
  }
</style>
