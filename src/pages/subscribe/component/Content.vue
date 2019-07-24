<template>
  <div class="con">
    <div class="datatime">
      <div class="con-time" @click="show(true)">
        <p class="text">入住时间</p>
        <p class="time-text">{{startTime}}</p>
      </div>
      <div class="time-number">
        <p class="">{{datedifference}}晚</p>
      </div>
      <div class="con-time" @click="show(false)">
        <p>离开时间</p>
        <p class="time-text">{{endTime}}</p>
      </div>
    </div>
    <p class="house-price">房费总计：$168</p>
    <div class="tab-content">
      入住信息
    </div>
    <div class="content">
      <p class="content-text">入住人</p>
      <input type="text" class="qxs-ic_user" placeholder="请输入名字" v-model="userName">
    </div>
    <div class="content">
      <p class="content-text">身份证</p>
      <input type="text" class="qxs-ic_user" placeholder="请输入身份证" v-model="idCard">
    </div>
    <div class="content">
      <p class="content-text">手机号</p>
      <input type="text" class="qxs-ic_user" placeholder="请输入手机号" v-model="mobile">
    </div>
    <div class="content">
      <p class="content-text">备注 </p>
      <input type="text" class="qxs-ic_user" placeholder="请输入内容" v-model="remark">
    </div>
    <p class="tips">预定须知:请携带好本人的身份证，办理入住手续，本店办理入住需要在前台缴费押金 ￥500</p>
    <div class="btn">
      <button class="button" @click="subscribeClick">预订</button>
    </div>
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

  export default {
    name: "Content",
    components: {
      DateTime
    },
    data() {
      return {
        userName: '',
        idCard: '',
        mobile: '',
        remark: '',
        startTime: '',
        endTime: '',
        status: ''
      }
    },
    created() {
      this.dayCalculation();
    },
    computed: {
      datedifference() {
        var dateSpan,
          iDays;
        dateSpan = Date.parse(this.endTime) - Date.parse(this.startTime);
        dateSpan = Math.abs(dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
        return iDays
      }
    },
    methods: {
      //跳转到日历
      subscribeClick() {
        if (!this.userName) {
          console.log('请输入名字');
          return;
        }
        if (!this.idCard) {
          console.log('请输入身份证');
          return;
        }
        if (!this.mobile) {
          console.log('请输入手机号');
          return;
        }
      },
      dayCalculation() {
        var today = new Date();
        today.setTime(today.getTime());
        this.startTime = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        //明天的时间
        var day3 = new Date();
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 100%
    margin 0 auto
    padding 0
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
    .tab-content
      background #e5e5e5
      padding 0.1rem 0.3rem
      margin-top 0.3rem
      font-size 0.33rem
      color #5b5b51
      font-family "黑体"
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
    .house-price
      width 100%
      color red
      margin-top 0.6rem
      font-size 0.3rem
      margin-left 0.5rem
    .btn
      width: 100%
      margin 0 auto
      padding-top 0.3rem
      height 1rem
      display flex
      justify-content center
      line-height 40px
      .button
        width 80%
        border-radius 0.12rem
        height 1rem
        color white
        line-height 40px
        font-size 0.3rem
        font-family: "黑体";
        background: #cc5946;
        text-align center
    .qxs-ic_user
      background: url("../../../assets/login/ic_user.png") no-repeat;
      background-size: 13px 15px;
      background-position: 3%;
      font-family "黑体"
    .tips
      font-size .3rem
      color red
      margin 0.3rem 0.5rem
      font-family "黑体"

</style>
