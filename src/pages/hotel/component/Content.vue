<template>
  <div class="con">
    <div class="list" v-for="(item,index) of list" :key="item.id">
      <div class="item-img">
        <img class="img" v-bind:src="imge">
      </div>
      <div class="item-content">
        <div class="house">
          <div class="house-name">
            <p>单人间</p>
            <p class="content">可预订{{index}}</p>
          </div>
          <div class="house-content">
            <p class="content">单人间</p>
            <p class="content">房间大小为40m</p>
          </div>
        </div>
        <div class="subscribe">
          <div class="button">预订</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Content",
    props: {
      list: Array
    },
    data() {
      return {
        imge: "//imgs.qunarzz.com/p/tts5/1704/7c/d44de0a04af9be02.jpg_r_390x260x90_e88f5cdc.jpg",
        list: [
          {
            imge: "https://ypt360.com/resources/upload/1547863202049.jpg",
            name: "单人间",
            status: "",
            content: "",
          }

        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 100%
    padding-top 50px
    margin 0;
    .list
      width 100%
      height 1.7rem
      display flex
      flex-direction row
      .item-img
        width 20%
        height 1.3rem
        padding 0.1rem
        .img
          width 100%
          height 100%
      .item-content
        display flex
        flex-direction row
        width 80%
        height 1.3rem
        padding 0.1rem
        .house
          width 80%
          height 1.3rem
          line-height 1.3rem
          .house-name
            font-size 0.3rem
            line-height: 200%;
            width 100%
            height 50%
            color #000
            display flex
            flex-direction row
          .house-content
            font-size 0.3rem
            margin 0 auto
            height 50%
            width 100%
            line-height: 200%;
            color #000
            display flex
            flex-direction row
      .subscribe
        width 20%
        height 1.3rem
        .button
          font-size 0.1rem
          text-align center
          border-radius 0.1rem
          line-height 200%
          color white
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 1rem;
          height: 40%;
          margin-top 0.25rem
          margin-left 0.2rem
          background #dc242e

  .content
    font-size 0.13rem
</style>
