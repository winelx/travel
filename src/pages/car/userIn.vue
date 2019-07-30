<template>
    <div>
        <div class="header">
            <base-header :title="title"></base-header>
        </div>
        <div class="container">
            <div class="form">
                <div class="in">
                    <div class="label">姓名：</div>
                    <div class="input"><input type="text" v-model="user.name" placeholder="输入姓名"/></div>
                </div>
                <div class="in">
                    <div class="label">身份证号：</div>
                    <div class="input"><input type="text" v-model="user.idea" placeholder="输入身份证号"/></div>
                </div>
                <div class="in">
                    <div class="label">手机号码：</div>
                    <div class="input"><input type="text" v-model="user.phone" placeholder="你的联系方式"/></div>
                </div>
                <div class="in">
                    <div class="label">单价：</div>
                    <div class="input"><input type="number" v-model="user.money "  placeholder="单价"/></div>
                </div>
                <div class="in">
                    <div class="label">描述：</div>
                    <div class="input"><input type="text" v-model="user.desc" placeholder="具体描述" /></div>
                </div>
                <div class="err">{{err}}</div>
                <div class="in">
                    <div class="submit-btn" @click="submit">提交</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import BaseHeader from "../../common/header/BaseHeader"
import axios from 'axios'
export default {
    components:{
        BaseHeader
    },
    data(){
        return {
            title:'填写用户信息',
            user:{
                routeId :'',//路线id
                name:'',
                idea:'',
                phone:'',
                desc:'',
                money :0
            },
            err:''
        }
    },
    created(){
        this.user.routeId = this.$route.query.routeId;
        this.user.money = this.$route.query.price;
    },
    methods:{
        submit(){
            let user = this.user;
            for(let key in user){
                if(user[key] == '' && key != 'desc'){
                    this.err = '请正确填写信息!'
                    return
                }
            }
            this.err = ''
            axios({
                method:'post',
                url:'/api/admin/route/jtlyroutebook/bookRoute',
                data:user
            }).then(res=>{
                res = res.data;
                if(res.ret == 0){
                    this.$router.go(-1)
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.form
    width calc(100% - 20px)
    margin 0 auto
    .err
        color red
        text-align center
        margin-top 20px
    >.in
        line-height 40px
        margin-bottom 12px
        display flex
        .label
            width 75px
            text-align right 
        .input
            flex 1
            border-bottom 1px solid #eee
            >input 
                width 100%
                line-height 40px
                margin-left 8px
        .submit-btn
            width 100%
            background-color #469BB4
            color #fff
            margin 20px auto
            text-align center
            

</style>


