<template>
  <div>
    <swiper :list="swiperList"></swiper>
    <icons :iconList="iconList"></icons>
  </div>
</template>

<script>
  import Swiper from './component/Swiper'
  import Icons from './component/Icons'


  export default {
    name: "home",
    data() {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [
          {
            desc: "酒店预订",
            id: "01",
            imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png"

          }, {
            desc: "登陆",
            id: "02",
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png"

          }, {
            desc: "注册",
            id: "03",
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"
          }, {
            desc: "车辆租赁",
            id: "04",
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"

          }
        ],
      }
    },
    components: {
      Swiper,
      Icons,
    },
    mounted() {
      //第一次进入界面后请求数据


    },
    created() {
    }
  }
</script>

<style scoped>

</style>
