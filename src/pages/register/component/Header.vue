<template>
  <div class="con">
    <router-link tag="div" class="back" to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="title">
      <p>注册</p>
    </div>
    <div class="back">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
  }

</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 50px
    margin 0
    padding 0
    display flex
    flex-direction row
    background #25a4bb

  .back
    display flex
    padding-left 10px
    flex-direction row
    width 20%
    margin 0 auto
    line-height 50px
    text-align center

  .title
    width 60%
    margin 0 auto
    line-height 50px
    font-size 0.35rem
    text-align center

</style>
