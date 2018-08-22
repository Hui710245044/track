<template>
  <div>
    <el-card>
      <label-item label="跟踪号" class="inline">
        <el-input class="inline" placeholder="搜索跟踪号，多个用逗号分开" v-model="track"></el-input>
      </label-item>
      <label-item label="物流平台" class="inline">
        <el-select :multiple="true" v-model="selectChannels"
        >
          <el-option v-for="channel in channels"
                     :label="channel.name"
                     :value="channel.channel"
                     :key="channel.channel"
          ></el-option>
        </el-select>
      </label-item>
      <el-button type="primary" @click.native="search">搜索</el-button>
    </el-card>
    <el-card>
      <el-table :data="tracks">
        <el-table-column label="ID" prop="id">
        </el-table-column>
        <el-table-column label="跟踪号" prop="track">
        </el-table-column>
        <el-table-column label="物流平台" prop="channel">
        </el-table-column>
        <el-table-column label="跟踪结束" prop="is_succ">
        </el-table-column>
        <el-table-column label="已经上网" prop="is_online">
        </el-table-column>
        <el-table-column label="开始跟踪时间">
          <span slot-scope="scope">
            {{scope.row.stime | date}}
          </span>
        </el-table-column>
        <el-table-column label="结束跟踪时间">
          <span slot-scope="scope">
            {{scope.row.etime | date}}
          </span>
        </el-table-column>
        <el-table-column label="下次跟踪时间">
          <span slot-scope="scope">
            {{scope.row.ptime | date}}
          </span>
        </el-table-column>
        <el-table-column label="创建时间" prop="createdAt">
        </el-table-column>
        <el-table-column label="最后修改时间" prop="updatedAt">
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tracksCount">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "track-list",
    data() {
      return {
        page:1,
        pageSize:20,
        tracks: [],
        tracksCount:0,
        track: '',
        selectChannels: [],
        channels: []
      }
    },
    created() {
      this.$http('/channels').then(({data}) => {
        this.channels = data;
      });
      this.search();
    },
    methods: {
      search() {
        const query = object2query({
          track:this.track,
          channels:this.selectChannels.join(','),
          page:this.page,
          pageSize:this.pageSize
        });
        this.$http(`/track-list?${query}`).then(({data}) =>{
          this.tracks = data.rows;
          this.tracksCount = data.count;
        })
      },
      handleSizeChange(pageSize){
        this.pageSize = pageSize;
        this.search();
      },
      handleCurrentChange(page){
        this.page = page;
        this.search();
      }
    },
    components: {
      labelItem: require('./label-item').default
    }
  }
</script>

<style scoped>
  .pagination{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
</style>
