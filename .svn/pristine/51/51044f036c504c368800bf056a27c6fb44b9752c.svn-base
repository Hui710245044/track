<template>
    <div>
        <!--查看弹框-->
        <el-dialog :title="title" :visible.sync="lookDialog">
            <el-form :model="addEditform">
                <el-form-item label="来源:" :label-width="formLabelWidth">
                    <el-input :disabled="disabled" v-model="addEditform.from_tag" auto-complete="off" class="input-size"></el-input>
                </el-form-item>
                <el-form-item label="物流商:" :label-width="formLabelWidth">
                    <el-select v-model="addEditform.label" placeholder="请选择" :disabled="disabled" class="input-size">
                    </el-select>
                </el-form-item>
                <el-form-item label="妥投状态:" :label-width="formLabelWidth">
                    <el-input v-model="addEditform.is_succ" auto-complete="off"  :disabled="disabled" class="input-size"></el-input>
                </el-form-item>
                <el-form-item label="妥投截止时间:" :label-width="formLabelWidth" >
                    <el-date-picker
                            v-model="addEditform.etime"
                            type="date"
                            placeholder="选择日期"  :disabled="disabled" >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="跟踪号:" :label-width="formLabelWidth">
                    <el-input v-model="addEditform.track" auto-complete="off"  :disabled="disabled" class="input-size"></el-input>
                </el-form-item>
                <el-form-item label="运输方式:" :label-width="formLabelWidth">
                    <el-input v-model="addEditform.transport" auto-complete="off"  :disabled="disabled" class="input-size"></el-input>
                </el-form-item>
                <el-form-item label="上网状态:" :label-width="formLabelWidth">
                    <el-input v-model="addEditform.is_online" auto-complete="off"  :disabled="disabled" class="input-size"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="lookDialog = false">取 消</el-button>
                <el-button type="primary" @click="$emit('update',
                type)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                editDialog: this.value,
                lookDialog: false,
                dialogTableVisible:false,
                formLabelWidth:'100px',
                disabled:false,
            }
        },
        watch:{
            type(val){
                this.disabled = val?true:false;
            },
            value(val){
                this.lookDialog = val;
            },
            lookDialog(val){
                this.$emit('input',val)
            },
        },
        props:{
            value:'',
            addEditform:'',
            type:Number,
            title:String
        }
    }
</script>