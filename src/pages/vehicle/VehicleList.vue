<template>
  <div class="con">
    <base-header :title="title"></base-header>
    <div class="item" v-for="(item,index) of data" @click="itemClick(index)">
      <div class="content">
        <div class="con-content">
          <div class="carNumber">车牌:{{item.carNumber}}</div>
          <div class="rentalCarPrice">租车单价￥{{item.rentalCarPrice}}</div>
        </div>
        <div class="con-content">
          <div>限载:{{item.numberOfPeople}}</div>
          <div class="carType">车辆类型:{{item.carType | cartype}}</div>
        </div>
      </div>
      <div class="subscribe">
        <p class="btn">预订</p>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  import Qs from "Qs"
  import BaseHeader from "../../common/header/BaseHeader"

  export default {
    name: "VehicleList",
    data() {
      return {
        data: [],
        title: '车辆列表',

      }
    },
    components: {
      BaseHeader,
    },
    filters: {
      cartype(val) {
        console.log(val)
        if (val === 1) {
          return "中巴"
        } else if (val === 2) {
          return "大巴"
        }
        else if (val === 3) {
          return "SUV"
        }
        else if (val === 4) {
          return "轿车"
        }
      }
    },
    methods: {
      itemClick(index) {
        this.$router.push({
          name: 'VehicleDetails', query: {
            id: this.data[index].id
          }
        })
      },
      request() {
        const datas = {
          "page.pn": "1",
          "page.size": "999",
          "pageMode": "pageMode"
        }
        axios({
          method: 'post',
          url: '/api/admin/bookcar/carinfo/ajaxList',
          data: Qs.stringify(datas)
        }).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        const data = res.data
        console.log(data)
        this.data = data.results

      }
    },
    created() {
      let orderId = this.$root.sessionId
      console.log(orderId)
      this.request()
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 100%
    .item
      flex-direction row
      width 100%
      height 1.2rem
      display flex
      margin-left 0.1rem
      margin-right 0.1rem
      .content
        color black
        width 80%
        height 1.2rem
        line-height 1.2rem
        display flex
        flex-direction column
        .con-content
          line-height 0.6rem
          height 0.6rem
          display flex
          flex-direction row
          .carNumber
            color black
            font-size 0.3rem
          .rentalCarPrice
            margin-left 0.5rem
            color red
            font-size 13px
          .carType
            margin-left 0.5rem
            font-size 13px
      .subscribe
        width 20%
        height 1.2rem
        line-height 1.2rem
    .btn
      width 70%
      padding 0.1rem
      font-size 0.3rem
      border-radius 0.1rem
      color #25a4bb

</style>
