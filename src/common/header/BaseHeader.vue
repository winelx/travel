<template>
  <div class="con">
    <div  class="back" @click="back">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="title">
      <p>{{title}}</p>
    </div>
    <div class="back">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props:{
      title:String
    },
    methods:{
      back(){
        this.$router.go(-1);//返回上一层
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    float top
    height 50px
    margin 0
    padding 0
    display flex
    flex-direction row
    background #25a4bb

  .back
    color white
    display flex
    flex-direction row
    width 20%
    margin 0 auto
    padding-left 0.22rem
    line-height 50px
    text-align center

  .title
    width 60%
    color white
    margin 0 auto
    line-height 50px
    font-size 0.35rem
    text-align center


</style>
