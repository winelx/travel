<template>
  <div>
    <base-header :title="title"></base-header>

    <div class="content">
      <div class="describe">{{describe}}</div>
      <div class="driver">司机信息：{{driverName}}</div>
      <div class="driver">车牌：{{carNumber}}</div>
      <div class="driver">车辆限载：{{numberOfPeople}}</div>
      <div class="driver">车辆类型：{{cartype}}</div>
      <div class="driver">租车单价：{{rentalCarPrice}}</div>
      <div class="driver">是否允许自驾：{{selfDriving | self}}</div>
    </div>
    <button class="btn" @click="subscribe">预订</button>
  </div>
</template>

<script>
  import axios from 'axios'
  import Qs from "Qs"
  import BaseHeader from "../../common/header/BaseHeader"
  //车辆详情
  export default {
    name: "VehicleDetails",
    data() {
      return {
        title: "车辆详情",
        data: "",
        id: "",
        describe: "",
        selfDriving: "",
        rentalCarPrice: "",
        numberOfPeople: "",
        carNumber: "",
        driverName: "",
      }
    },
    filters: {
      self(val) {
        if (val === 1) {
          return "允许"
        } else if (val === 2) {
          return "不允许"
        }
      }
    },
    components: {
      BaseHeader
    },
    computed: {
      cartype: function () {
        if (this.data.carType === 1) {
          return "中巴"
        } else if (this.data.carType === 2) {
          return "大巴"
        } else if (this.data.carType === 3) {
          return "SUV"
        } else if (this.data.carType === 4) {
          return "轿车"
        }
      }
    },
    methods: {
      subscribe() {
        if ( this.$store.state.jsonId === "") {
          this.$router.push({name: 'Login'})
        } else {
          this.$router.push({
            name: 'VehicleSubscribe', query: {
              id: this.id,//车辆id
              selfDriving: this.selfDriving,//是否允许自驾
              driverName: this.driverName,//驾驶员名字信息
              carNumber: this.carNumber,//车牌
              CarPrice: this.rentalCarPrice,//租车单价
              driverId: this.data.driverId,//驾驶员Id
            }
          })
        }
      },
      request() {
        const data = {
          "id": this.id
        }

        axios({
          method: 'post',
          url: '/api/admin/bookcar/carinfo/detail',
          data: Qs.stringify(data)
        }).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        const data = res.data
        this.data = data.data;
        console.log(data)
        this.describe = data.data.describe;
        this.selfDriving = data.data.selfDriving;
        this.rentalCarPrice = data.data.rentalCarPrice;
        this.numberOfPeople = data.data.numberOfPeople;
        this.carNumber = data.data.carNumber;
        this.driverName = data.data.driverName;

      }
    },
    created() {
      this.id = this.$route.query.id;
      this.request()
    }
  }
</script>

<style lang="stylus" scoped>
  .describe
    font-family "黑体"
    margin-top 0.3rem
    margin-left 0.2rem
    margin-bottom 0.3rem
    font-size 0.3rem

  .content
    height 100%
    display flex
    margin-top 0.2rem
    margin-left 0.1rem
    margin-right 0.1rem
    padding 0.2rem
    background #d6e0e1
    border-radius 0.1rem
    flex-direction column
    .driver
      width 100%
      height 0.3rem
      font-size 0.2rem
      margin-left 0.2rem
      margin-top 0.1rem

  .btn
    width 90%
    height 1rem
    font-family "黑体"
    font-size 0.35rem
    margin-top 0.5rem
    margin-right 0.2rem
    margin-left 0.2rem
    background red
    color white
    border-radius 0.1rem
</style>
