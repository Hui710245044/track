<template>
  <el-tabs>
    <el-tab-pane label="队列">
      <el-card>
        <el-row>
          <el-col :span="12">
            <el-card>
              <h4 style="text-align: center;">物流平台队列Worker数</h4>
              <el-form style="text-align: center;" label-align="right" label-width="120px">
                <el-form-item v-for="channel in channels" :key="channel.channel" :label="`${channel.channel}：`">
                  <el-input class="inline" @input="changeValue(channel, $event)" :value="channel.value"></el-input>
                </el-form-item>
              </el-form>
              <div class="card-footer" v-if="changes.length > 0">
                <el-button type="primary" @click.native="submit">保存</el-button>
                <el-button @click.native="cancel">取消</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="定时器">

    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: "setting",
    data() {
      return {
        channels: []
      }
    },
    created() {
      this.$http('/channels-worker').then(({data}) => {
        this.channels = data;
      })
    },
    methods:{
      changeValue(channel, newValue){
        if(!channel.old){
          this.$set(channel, 'old', channel.value);
        }
        channel.value = newValue;
      },
      cancel(){
        this.channels.forEach(channel =>{
          if(channel.old){
            channel.value = channel.old;
            this.$delete(channel, 'old');
          }
        })
      },
      submit(){
        this.$http.post('/channels-worker', this.changes).then(res =>{
          this.$message({type:'success', message:res.data.message});
          this.channels.forEach(channel =>{
            if(channel.old){
              this.$delete(channel, 'old');
            }
          })
        })
      }
    },
    computed:{
      changes(){
        return this.channels.filter(channel =>{
          return channel.old
        }).map(channel => {
          return {channel:channel.channel,value:channel.value}
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .relative {
    position: relative;
  }

  .card-footer {
    text-align: center;
  }
</style>
