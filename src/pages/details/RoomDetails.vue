<template>
  <div class="con">
    <room-banner
      :sightName="description" :bannerImg="bannerImg" :content="content"></room-banner>
    <room-header :title="title"></room-header>
    <div>
      <div class="time">
        <div class="time-data">
          入住时间
          <p class="time-data-text">{{content.checkInTimeStr}}</p>
        </div>
        <div class="time-data">
          离开时间
          <p class="time-data-text">{{content.leaveTimeStr}}</p>
        </div>
      </div>
      <div class="content-price">
        <p>单价</p>
        <p class="price">￥{{content.price}}</p>

        <button class="btn" @click="Subscribe">预订</button>
      </div>
    </div>
  </div>
</template>

<script>
  import RoomBanner from "./component/RoomBanner"
  import RoomHeader from './component/RoomHeader'
  import axios from 'axios'

  export default {
    name: "RoomDetails",
    data() {
      return {
        title: "",
        description: "",
        bannerImg: "",
        content: Object,
        gallaryImgs: []
      }
    },
    components: {
      RoomBanner,
      RoomHeader,
    },
    methods: {
      request(id) {
        console.log("发送请求")
        axios({
          method: 'get',
          url: '/api/admin/jtlymanage/jtlymanageroom/roomShowDetailByApp?roomId=' + id,
        }).then(this.analysisJson)
      },
      analysisJson(response) {
        const data = response.data;
        const content = data.data;
        console.log(content)
        this.description = content.description
        this.title = content.roomName
        this.content = content
        this.bannerImg = "http://192.168.20.35:8082/jtly/" + content.filepath
      },
      Subscribe(){
        // if (res.headers['set-cookie'] === undefined) {
        //   this.$router.push({name: 'Login'})
        // } else {
        //   this.$router.push({
        //     name: 'Subscribe', query: {
        //       id: this.list[index].roomId,
        //       name: this.list[index].roomName,
        //     }
        //   })
        // }
      }
    },
    created() {
      this.request(this.$route.query.id);
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 1000px
    .time
      background #dedede
      display: flex
      flex-direction row
      width 100%
      height 0.7rem
      margin 0 auto
      .time-data
        text-align center
        font-size 0.3rem
        display flex
        flex-direction column
        width 50%
        height 0.3rem
        line-height 0.3rem
        .time-data-text
          margin-top 0.1rem

    .content-price
      margin-top 0.3rem
      display flex
      flex-direction row
      .price
        color red
      .btn
        background red
        color white
        width 50px
        height 25px

</style>
