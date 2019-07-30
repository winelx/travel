<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of  page" :key="item.id" @click="itemclick(item.id)">
          <div class="icon-image">
            <img class="icon-image-content" :src='item.imgUrl'/>
            <p class="icons-text">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Icons",
    props: {
      iconList: Array
    },
    data() {
      return {
        swiperOption: {
          loop: false//是否可以循环
        },

      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages;
      }
    },
    methods: {
      itemclick(index) {
        if (index === '01') {
          this.$router.push({name: 'Hotel'});
        } else if (index === "02") {
          this.$router.push({name: 'Login'});
        } else if (index === "03") {
          this.$router.push({name: 'Register'});
        } else if (index === "04") {
          this.$router.push({name: 'VehicleList'});
        }
        else if (index==='07'){
          this.$router.push('car');
        }
      }
    }
  }

</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom 50%
    .icon
      position: relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      .icon-image
        width 100%
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        position absolute
        .icon-image-content
          height 80%
          display block
          margin 0 auto
      .icons-text
        left: 0
        right: 0
        bottom: 0
        height .33rem
        text-align center
        margin-top .2rem
        line-height .33rem
        color $iconName


</style>
