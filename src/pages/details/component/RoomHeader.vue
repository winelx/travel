<template>
  <div>
    <div  @click="back" class="header-abs">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-fixed" :style="opacityStyle"  v-show="!showabs">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      {{title}}
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    props:{
      title:String
    },
    data() {
      return {
        showabs: true,
        opacityStyle:{
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const  top=document.documentElement.scrollTop
        if (top > 60) {
          //实现title的渐变效果
          let opacity = top / 140//这里控制渐变范围
          //让opacity最大值只能为1
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showabs = false
        } else {
          this.showabs = true
        }
      },
      back(){
        this.$router.go(-1);//返回上一层
      }
    },
    //界面展示
    activated() {
      //界面展示的时候执行的方法，
      //绑定window，记得在deactivated解除绑定
      window.addEventListener('scroll', this.handleScroll)
    },
    //界面隐藏
    deactivated(){
      //解除绑定
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width: .6rem
    height: .6rem
    line-height: .6rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .back-icon
      font-size .4rem
      color #fff
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
