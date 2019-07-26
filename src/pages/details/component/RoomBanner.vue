<template>
  <div>
    <div class="banner" @click="bannerOnclick">
      <img :src="bannerImg">
      <div class="banner-info">
        <div class="banner-titile">{{this.sightName}}</div>
        <!--<div class="banner-number">-->
          <!--<span class="iconfont banner-icon">&#xe692;</span>-->
          <!--{{this.gallaryImgs.length}}-->
        <!--</div>-->
      </div>
    </div>
    <!--<fade>-->
      <!--<grllary :imgs="gallaryImgs" v-show="showGrllary" @close="gallaryOnclick"></grllary>-->
    <!--</fade>-->
  </div>
</template>

<script>
  import Grllary from '../../../common/gallary/Gallary'
  import Fade from '../../../common/fade/Fade'

  export default {
    name: "RoomBanner",
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGrllary: false
      }
    },
    methods: {
      bannerOnclick() {
        this.showGrllary = true
      },
      gallaryOnclick() {
        this.showGrllary = false
      },
    },
    components: {
      Grllary,
      Fade
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow hidden
    height 0
    width 100%
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left: 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-titile
        flex: 1
        font-size: .25rem
        padding: 0 .2rem
        width:100px;
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      .banner-number
          height: .32rem
          line-height: .32rem
          margin-top: .14rem
          padding: 0 .4rem
          border-radius: .2rem
          background: rgba(0, 0, 0, .8)
          font-size: .24rem
          .banner-icon
            font-size .24rem


</style>
