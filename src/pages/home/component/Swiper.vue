<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipter-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>

</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      list:Array
    },
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true
        },
      }
    }
  }
</script>

<style lang="stylus" scoped>
  /*改变指示点的颜色*/
  .wrapper >>> .swiper-pagination-bullet-active
    background white
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 41.20%
    background: #eee
  .swipter-img
    width 100%
    height 3.3rem


</style>
