<template>
  <div class="con">
    <header></header>
    <div class="login_form">
      <div class="tab">
        <input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="userName">
        <input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="password">
        <button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created() {
      if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
        this.userName = JSON.parse(localStorage.getItem('user')).userName;
        this.password = JSON.parse(localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
        axios.get('/api/index.json?city=',{

        })
          .then(this.getHomeInfoSucc)
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
          background-size: 13px 15px;
          background-position: 3%;
        .qxs-ic_password
          background: url("../../../assets/login/ic_password.png") no-repeat;
          background-size: 13px 15px;
          background-position: 3%;
        .login_btn
          width: 100%;
          height 1rem
          font-size: 16px;
          border-radius 0.2rem
          margin-top 0.5rem
          color white
          background: linear-gradient(to right, #000099, #2154FA); /* 标准的语法 */
          filter: brightness(1.4);

  .qxs-icon
    height: 50px;
    width: 90%;
    margin-bottom: 5px;
    padding-left: 8%;
    border: 0;
    border-bottom: solid 1px lavender;


</style>
