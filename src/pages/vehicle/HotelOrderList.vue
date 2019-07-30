<template>
  <div>
    <base-header :title="title"></base-header>
    <div class="con" v-for="(item,index) of data" :key="index">
      <div class="content">
        <div class="ve-message">
          <div class="item-tab">{{item.hotelName}}</div>
          <div class="item-tab">{{item.buildCode}}</div>
        </div>
        <div class="ve-message">
          <div class="item-tab">{{item.userName}}</div>
          <div class="item-tab">￥{{item.money}}</div>
        </div>
      </div>
      <div class="message">
        <div class="status">{{item.status}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import Qs from "Qs"
  import BaseHeader from "../../common/header/BaseHeader"

  export default {
    name: "HotelOrderList",
    data() {
      return {
        title: "酒店订单列表",
        data: []
      }
    },
    filters: {
      status(val) {
        if (val === 1) {
          return "待确定"
        } else {
          return "已确认"
        }
      }
    },
    components: {
      BaseHeader,
    },
    methods: {
      quest() {
        let _this = this
        const pare = {
          "page.pn": "1",
          "page.size": "999"
        }
        const jsonid = this.$store.state.jsonId;
        console.log(jsonid)
        axios({
          method: 'post',
          url: '/api//admin/bookcar/carleaseinfo/myList',
          data: Qs.stringify(pare),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': "JSESSIONID=" + jsonid + "; JJCenter=" + jsonid
          }
        }).then(function (response) {
          const data = response.data;
          console.log(response)
          _this.data = data.results;
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    created() {
      this.quest()
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    margin-right .1rem
    margin-left .1rem
    padding 0
    height 1.2rem
    display flex
    flex-direction row
    border-bottom 1px solid #ccc;
    .content
      width 80%
      display flex
      flex-direction column
      .ve-message
        height 50%
        display flex
        flex-direction row
        .item-tab
          padding-top 0.2rem
          width 50%
          height 0.5rem
    .message
      width 20%
      text-align center
      margin 0 auto
      .status
        text-align center
        padding-top 0.2rem
        height 0.5rem
        margin-left 0.2rem
        background red
        color white
        border-radius 0.1rem
        margin-top 0.2rem
        text-align center

</style>
