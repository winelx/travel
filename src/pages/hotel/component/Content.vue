<template>
  <div class="con">
    <div class="list" v-for="(item,index) of list" :key="index" @click="itemClick(index)">
      <div class="item-img">
        <img class="img" :src="baseurl+ item.filepath">
      </div>
      <div class="item-content">
        <div class="house">
          <div class="house-name">
            <p>{{item.roomName}}</p>
            <div class="price">${{item.price}}</div>
          </div>
          <div class="house-content">
            <p class="description">{{item.description}}</p>
            <!--<p class="content">房间大小为40m</p>-->
          </div>
        </div>
        <div class="subscribe">
          <div class="button" @click="subscribeClick(index)">查看</div>
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
        baseurl: "http://192.168.20.36:8090/jtly/"
      }
    },
    methods: {
      subscribeClick(index) {
        this.$router.push({
          name: 'RoomDetails', query: {
            id: this.list[index].roomId,
            roomName: this.list[index].roomName,
          }
        })
      },
      itemClick(index) {
        this.$router.push({
          name: 'RoomDetails', query: {
            roomId: this.list[index].roomId,
            roomName: this.list[index].roomName,
          }
        })
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
        width 85%
        height 1.3rem
        padding 0.1rem
        .content
          font-size 0.13rem
          margin-left 0.3rem
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
            .description
              font-size 0.13rem
              display: inline-block;
              white-space: inherit || normal;
              overflow: hidden;
              text-overflow: ellipsis;
      .subscribe
        width 15%
        height 1.3rem
        .button
          font-size 0.1rem
          text-align center
          border-radius 0.1rem
          line-height 200%
          color white
          width: 1rem;
          margin-top 0.35rem
          background #28bcff
      .price
        display flex
        position relative
        margin-left 0.5rem
        color red
        float right
</style>
