<template>
  <div class="con">
    <base-header :title="title"></base-header>
    <div class="vehicle-message">
      <p class="vehicle-tab">车辆基本信息</p>
      <div class="message">
        <div class="message-itme">驾驶员:{{driverName}}</div>
        <div class="message-itme">车牌:{{carNumber}}</div>
      </div>
      <div class="message">
        <div class="message-itme">是否允许自驾:{{this.selfDriving | self}}</div>
        <div class="message-itme">租赁价格:{{this.rentalCarPrice}}</div>
      </div>
    </div>
    <div class="datatime">
      <div class="con-time" @click="show(true)">
        <p class="text">租赁开始时间</p>
        <p class="time-text">{{startTime}}</p>
      </div>
      <div class="time-number">
        <p class="">{{datedifference}}天</p>
      </div>
      <div class="con-time" @click="show(false)">
        <p>租赁结束时间</p>
        <p class="time-text">{{endTime}}</p>
      </div>
    </div>
    <div class="order-message">
      <div class="content">
        <p class="content-text">租赁人姓名</p>
        <input type="text" class="qxs-ic_user" placeholder="请输入名字" v-model="userName">
      </div>
      <div class="content">
        <p class="content-text">租赁人身份证号</p>
        <input type="text" class="qxs-ic_user" placeholder="请输入身份证" v-model="idCard">
      </div>
      <div class="content">
        <p class="content-text">租赁人电话号码</p>
        <input type="text" class="qxs-ic_user" placeholder="请输入电话" v-model="mobile">
      </div>
    </div>
    <button class="btn" @click="Subscribe">预订</button>
    <div class="date-time-item">
      <date-time ref="dateTime"
                 type="date"
                 @confirm="select"
      ></date-time>
    </div>
  </div>
</template>

<script>
  import DateTime from 'vue-date-time-m'
  import BaseHeader from "../../common/header/BaseHeader"
  import axios from 'axios'
  import Qs from 'Qs'

  export default {
    name: "VehicleSubscribe",
    components: {
      DateTime,
      BaseHeader,
    },
    data() {
      return {
        id: "",
        data: "",
        title: "车辆租赁",
        startTime: "",
        endTime: "",
        status: '',
        lesseeId: "",//租赁人
        userName: "",
        idCard: "",
        mobile: "",
        selfDriving: "",
        driverName: "",
        carNumber: "",
        rentalCarPrice: ""
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
    computed: {
      datedifference() {
        var dateSpan,
          iDays;
        dateSpan = Date.parse(this.endTime) - Date.parse(this.startTime);
        dateSpan = Math.abs(dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
        return iDays
      },
    },
    methods: {
      //初始化时间
      dayCalculation() {
        const today = new Date();
        today.setTime(today.getTime());
        this.startTime = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        //明天的时间
        const day3 = new Date();
        day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
        this.endTime = day3.getFullYear() + "-" + (day3.getMonth() + 1) + "-" + day3.getDate();
      },
      //  展示日期组件
      show(status) {
        this.status = status
        this.$refs.dateTime.show()
      },
      // 日期组件回调
      select(val) {
        if (this.status) {
          this.startTime = val
        } else {
          this.endTime = val
        }
      },
      lesseeIdrequest() {
        let sessionId = this.$root.sessionId
        console.log(sessionId)
        axios.get("/api/admin/bookcar/carleaseinfo/getUserInfo",{
          headers: {
            'Authorization': 'Bearer ' + token,
            'Cookie': "JSESSIONID=" + sessionId
          }
        })
          .then(function (response) {
            console.log(response);
          })
      },
      Subscribe() {

      }
    },
    created() {
      /*   车辆id*/
      this.id = this.$route.query.id
      console.log(this.id)
      // /*//是否允许自驾*/
      this.selfDriving = this.$route.query.selfDriving
      this.driverName = this.$route.query.driverName//驾驶员名字信息
      this.carNumber = this.$route.query.carNumber//车牌
      this.rentalCarPrice = this.$route.query.CarPrice//租车单价
      this.dayCalculation();
      this.lesseeIdrequest();
    }

  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 100%
    margin 0 auto
    .vehicle-message
      margin-left 0.1rem
      margin-right 0.1rem
      margin-top 0.2rem
      background #e2e2e2
      padding 0.2rem
      color black
      border-radius 0.1rem
      display flex
      flex-direction column
      .vehicle-tab
        font-size 0.3rem
        margin-bottom 0.2rem
      .message
        margin-top 0.1rem
        display flex
        flex-direction row
        .message-itme
          width: 50%
          height 0.3rem
    .order-message
      display flex
      flex-direction column
      .content
        padding-top 0.3rem
        width 80%
        height 0.8rem
        margin 0 auto
        display flex
        solid-color #cacaca 1px
        flex-direction row
        border-bottom: 1px solid #ccc
        .content-text
          font-size 0.25rem
          color black
          height 0.8rem
          line-height 0.8rem
          font-family "黑体"
          padding-right 0.3rem
          text-align center
        .qxs-ic_user
          background-size: 13px 15px;
          background-position: 3%;
          font-family "黑体"
    .btn
      width 90%
      height 1rem
      font-family "黑体"
      font-size 0.35rem
      margin-top 0.5rem
      margin-right 0.2rem
      margin-left 0.3rem
      background red
      color white
      border-radius 0.1rem
    .datatime
      width 100%
      height 1rem
      display flex
      flex-direction row
      time-number
      .con-time
        border: 1px solid #ccc
        display flex
        margin 0.22rem
        flex-direction column
        width 40%
        height 1rem
        line-height 0.5rem
        text-align center
      .time-number
        display flex
        margin 0.22rem
        flex-direction column
        width 20%
        height 1rem
        line-height 1rem
        text-align center
      .time-text
        color red
</style>
