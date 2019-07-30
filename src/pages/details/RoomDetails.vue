<template>
  <div class="con">
    <room-banner
      :sightName="title" :bannerImg="bannerImg" :content="content"></room-banner>
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
      <p class="description">{{description}}</p>
      <div class="content-price">
        <div class="div-price">
          <p>单价</p>
          <p class="price">￥{{price}}</p>
        </div>
        <div class="btn-price">
          <button class="btn" @click="Subscribe">预订</button>
        </div>
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
        roomId: "",
        roomName: '',
        title: "",
        description: "",
        bannerImg: "",
        content: Object,
        gallaryImgs: [],
        price: ""
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
        this.price = content.price
        this.bannerImg = "http://192.168.20.35:8082/jtly/" + content.filepath
      },
      Subscribe() {
        //登陆前验证是否登陆过
        if (this.$store.state.jsonId === "") {
          this.$router.push({name: 'Login'})
        } else {
          this.$router.push({
            name: 'Subscribe', query: {
              roomId: this.roomId,
              price: this.price,
              roomName: this.roomName,
            }
          })
        }
      }
    },
    created() {
      this.roomId = this.$route.query.roomId
      this.roomName = this.$route.query.roomName,
        this.request(this.roomId);
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
      .description
        width 100%
        color black
    .content-price
      width 100%
      height 0.6rem
      margin-top 0.3rem
      display flex
      flex-direction row
      .div-price
        display flex
        flex-direction row
        width 80%
        .price
          color red
      .btn-price
        width 20%
        margin 0 auto
        .btn
          border-radius 0.1rem
          padding 0 0.3rem
          background red
          text-align center
          color white
          height 25px

</style>
