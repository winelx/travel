<template>
  <div class="container" @click="gallaryOnclick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    //这里管理书籍
    data() {
      return {
        swiperOption: {
          observeParents: true,
          observer: true,
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    //管理函数
    methods:{
      gallaryOnclick(){
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit

  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top: 0
    bottom 0
    background #000000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color white
        bottom -1rem
</style>
