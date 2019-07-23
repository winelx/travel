<template>
  <div class="con">
    <header></header>
    <div class="login_form">
      <div class="tab">
        <input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="userName">
        <input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="password">
        <input type="text" class="qxs-ic_email qxs-icon" placeholder="邮箱" v-model="email">
        <button class="login_btn" @click="login" type="primary">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Qs from 'Qs'


  export default {
    data() {
      return {
        userName: '',
        password: '',
        email: '',
      }
    },
    created() {
      if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
        this.userName = JSON.parse(localStorage.getItem('user')).userName;
        this.password = JSON.parse(localStorage.getItem('user')).password;
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          console.log("请输入用户名")
          return;
        }
        if (!this.password) {
          console.log("请输入密码")
          return;
        }
        if (!this.email) {
          console.log("请输入邮箱")
          return;
        }
        this.$api.register(id, {
          username: this.userName,
          password: this.password,
          email: this.email
        }).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        console.log(res)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    width: 100%
    height: 100%
    .login_form
      margin-top 2rem
      width 100%
      height 5rem
      display flex
      line-height 5rem
      flex-direction column
      position relative
      .tab
        width 80%
        height 1.5rem
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        line-height 1rem
        .qxs-ic_user
          background: url("../../../assets/login/ic_user.png") no-repeat;
          background-size: 20px 20px;
          background-position: 1%;
        .qxs-ic_password
          background: url("../../../assets/login/ic_password.png") no-repeat;
          background-size: 20px 20px;
          background-position: 1%;
        .qxs-ic_email
          background: url("../../../assets/login/email.png") no-repeat;
          background-size: 20px 20px;
          background-position: 1%;
        .login_btn
          width: 100%;
          height 1rem
          font-size: 16px;
          border-radius 0.2rem
          margin-top 0.5rem
          background: linear-gradient(to right, #000099, #2154FA); /* 标准的语法 */
          filter: brightness(1.4);

  .qxs-icon
    height: 50px;
    width: 90%;
    margin-bottom: 5px;
    padding-left: 10%;
    border: 0;
    border-bottom: solid 1px lavender;


</style>
