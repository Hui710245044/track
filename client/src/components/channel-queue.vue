<template>
  <div>
    <el-tabs>
      <el-tab-pane v-for="channel in channels"
                    :key="channel.channel"
                    :label="channel.channel">
        <ul>
          <li v-for="queue in channel.queues" :key="queue">
            {{queue}}
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "channel-queue",
    data() {
      return {
        channels: []
      }
    },
    created() {
      this.$http.get('/channels').then(async ({data}) => {
        this.channels = await Promise.all(data.map(async res =>{
          let {data:queues} = await this.$http.get(`/channel-queue?channel=${res.channel}`);
          res.queues = queues;
          return res;
        }));

      })
    }
  }
</script>

<style scoped>

</style>
