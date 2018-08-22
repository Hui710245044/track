<template>
  <div class="check-layer">
    <!--查看 修改弹框-->
    <el-dialog :title="title" :visible.sync="lookDialog" width="50%">
      <el-form :model="addEditform">
        <el-row :gutter="12">
          <el-col :span="9" :offset="1">
            <div>
              <el-form-item label="名称:" :label-width="formLabelWidth">
                <el-input :disabled="disabled" v-model="addEditform.id" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="物流商:" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off" :disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="抓取上网开始时间:" :label-width="formLabelWidth">
                <el-input v-model="form.line_start" auto-complete="off" :disabled="disabled">天</el-input>
              </el-form-item>
              <el-form-item label="上网标志:" :label-width="formLabelWidth">
                <el-input v-model="form.line_mark" auto-complete="off" :disabled="disabled">天</el-input>
              </el-form-item>
              <el-form-item label="妥投截止时间:" :label-width="formLabelWidth">
                <el-input v-model="form.time_end" auto-complete="off" :disabled="disabled"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="9" :offset="2">
            <div>
              <el-form-item label="接收方指定代码:" :label-width="formLabelWidth">
                <el-input v-model="form.code" auto-complete="off" :disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="抓取上网结束时间:" :label-width="formLabelWidth">
                <el-input v-model="form.line_end" auto-complete="off" :disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="妥投标志:" :label-width="formLabelWidth">
                <el-input v-model="form.mark" auto-complete="off" :disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="类型:" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择" :disabled="disabled">
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button @click="lookDialog = false">取 消</el-button>
        <el-button type="primary" @click="$emit('update',type)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editDialog: this.value,
        lookDialog: false,
        formLabelWidth: '150px',
        disabled: false,
        form: JSON.parse(JSON.stringify(this.addEditform))
      }
    },
    watch: {
      type(val) {
        // console.log('a',val);
        this.disabled = val ? true : false;
      },
      value(val) {
        this.lookDialog = val;
      },
      lookDialog(val) {
        this.$emit('input', val)
      },
    },
    props: {
      value: '',
      addEditform: Object,
      type: Number,
      title: String
    }
  }
</script>
<style lang="stylus">
  .check-layer {
    .el-dialog__header {
      box-shadow: 1px 1px 1px #ccc;
      -webkit-box-shadow: 1px 1px 1px #ccc;
      -moz-box-shadow: 1px 1px 1px #ccc;
    }
  }

</style>
