<template>
    <div class="c-admin-index">
        <div class="template-over">
        </div>
        <div class="login login-in" ref="login">
            <div class="type">
                <div style="color:#f56600"> 登录</div>
            </div>
            <el-form class="form-login">
                <el-form-item label="">
                    <div class="relative  flex">
                        <input type="text" class="user-input flex-1" v-model="username" placeholder="请输入用户名">
                    </div>
                </el-form-item>
                <el-form-item label="">
                    <div class="relative  flex">
                        <input type="password" class="user-input flex-1" v-model="password" placeholder="请输入密码">
                    </div>
                </el-form-item>
                <el-form-item label="">
                    <div class="relative  flex">
                        <input type="text" class="user-input flex-1" v-model="code" placeholder="请输入验证码"  @keyup.enter="login">
                        <img width="100"  height="46" class="ml-xs"  @click="get_code":src="authCode" alt="">
                    </div>
                </el-form-item>
            </el-form>
            <div class="flex">
                <div   class="flex-1 buttons"  @click="login">登录</div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .c-admin-index{
        font-size: 16px;
        height: 100%;
        width: 100%;
        background: url("../assets/bg.jpg") no-repeat 0 0;
        background-size: cover;
        position: relative;
        .template-over {
            position :absolute;
            top:0;
            left :0;
            height: 100%;
            width: 100%;
            background: url("../assets/dott.png") repeat 0 0;
            background-size: cover;
        }
        .login {
            font-size :12px;
            position: absolute;
            top:20%;
            left :40%;
            background:#f5f5f5;
            color:#757575;
            height: 400px;
            width: 350px;
            padding:20px 28px;
            > .type {
                color: #f56600;
                text-align :center;
                margin-bottom :20px;
                font-size :24px
                >div{
                    display :inline-block
                }
                .line{
                    height:24px;
                    margin:0 42px 0 42px;
                    border:1px solid #e0e0e0;
                }
            }
            .form-login {
                .img {
                    position absolute;
                    left: 8px;
                    top: 7px;
                    height: 28px;
                }
                .user-input {
                    border: 1px solid #e0e0e0;
                    background:0;
                    padding: 10px 15px 10px 8px;
                    margin-bottom: 15px;
                    outline: none;
                    font-size: 14px;
                    line-height: 26px;
                    color: #333;
                    letter-spacing: 1px;
                    &::-webkit-input-placeholder{
                        color:#999
                    }
                    &::-moz-placeholder{
                        color:#999
                    }
                    &:focus {
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
                    }
                }
            }
            .buttons{
                text-align:center;
                background-color:#f56600;
                font-size :14px;
                cursor :pointer;
                line-height :50px;
                height :50px;
                color :#ffffff
            }
        }

        .login-in {
            animation: fadeIn 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }

        .login-out {
            animation: fadeOut 0.5s linear;
        }
    }



    @keyframes fadeIn {
        0% {
            transform: translate3d(0, -400px, 0);
            opacity: 0;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
<script>
    const   erpHost='http://172.18.8.242/';
    // import { mapActions ,mapGetters} from 'vuex'
    export default {
        data() {
            return {
                username: '',
                password: '',
                captcha:'',
                code:'',
                authCode:'',
                token:''
            }
        },
        created() {
            this.get_code();

        },
        computed:{
            // ...mapGetters(['get_token','get_user'])
        },
        methods: {
            // ...mapActions(['load_token','load_user']),
            get_code() {
                window.fetch(`${erpHost}login/code`, {
                    mode: 'cors',
                }).then((res) => {
                    this.captcha = res.headers.get('Captcha');
                    res.blob().then((myBlob) => {
                        this.authCode = URL.createObjectURL(myBlob);
                    });
                });
            },
            get_info(){
                let req=new Request(`${erpHost}login/info`,{
                    mode:'cors',
                    method:"get",
                    headers:{'Authorization':this.token}
                });
                this.prom(req).then(res=>{
                    console.log("res _ inf:",res)
                    // this.load_user(res);
                    this.$router.replace('')
                })
            },
            login(){
                let data={
                    username: this.username,
                    password: this.password,
                    code: this.authcode,
                    captcha: this.captcha,
                };
                let body=this.obj2url(data);
                let req=new Request(`${erpHost}login`,{method:'post',
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    mode:'cors',
                    body:body
                });
                this.prom(req).then(res=>{
                    this.$message({type:"success",message:res.message||res});
                    this.token=res.token;
                    // this.load_token(res.token);
                    this.get_info();
                    window.sessionStorage.setItem('token',res.token)
                }).catch(code=>{
                    this.$message({type:"error",message:code.message||code})
                })
            },
            prom(req){
                return new Promise((succ,fail)=>{
                    window.fetch(req).then(res=>{
                        if(200 === res.status){
                            res.json().then(json=>{
                                succ(json)
                            })
                        }else {
                            res.json().then(code=>{
                                fail(code)
                            })

                        }
                    })
                })

            },
            obj2url(obj){
                let strs = [];
                function value2string(obj) {
                    switch (typeof obj) {
                        case 'object':
                            return JSON.stringify(obj);
                        case 'array':
                            return JSON.stringify(obj);
                        default:
                            return obj;
                    }
                }

                for (let i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        let templ = '';
                        if (typeof obj[i] === 'number') {
                            templ = `${i}=${obj[i]}`;
                        } else {
                            templ = `${i}=${encodeURIComponent(value2string(obj[i]))}`;
                        }
                        strs.push(templ);
                    }
                }
                return strs.join('&');
            }
        },
        props: {
        },
        components: {}
    }
</script>