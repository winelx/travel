<template>
  <div class="row">
      <div class="header">
        <base-header :title="title"></base-header>
      </div>
      <div class="container">
        <div class="group-list">
          <div class="list-item" v-for="(v,i) in list" :key="i">
            <router-link tag="div" :to="{path:'/carinfo',query:{id:v.id}}" class="line">
              <div class="name" v-html="v.name"></div>
              <div class="desc" v-html="v.description"></div>
            </router-link>
            <div class="book-btn"> 预订 <span>￥{{v.price}}</span></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import BaseHeader from "../../common/header/BaseHeader"
  import axios from "axios"
  export default {
    name: "Hotel",
    data() {
      return {
        title: "车辆列表",
        list: []
      }
    },
    components: {
      BaseHeader
    },
    created() {
      this.request()
    },
    methods: {
      request() {
        axios({
          method: 'get',
          //url: '/api/admin/jtlymanage/jtlymanageroom/getRoomDataList',
          url: '/api/admin/route/jtlyroutebase/getRouteDataListByApp',
        }).then(res=>{
          res = res.data
          this.list = res.results
        })
      },
      getHomeInfoSucc(res) {
        this.list = res.results
      }
    },
  }
</script>

<style lang="stylus" scoped>
.row
  height 100vh
  display flex
  flex-direction column
  .header
    height 50px
  .container
    flex 1
    overflow auto hidden
    .group-list
      width 100%
      .list-item
        margin 10px
        padding 10px 0
        border-bottom 1px solid #eee
        display flex
        .line
          flex 1
          .name
            font-size 16px
            font-weight bold
            padding-bottom 10px
          .desc
            height 20px
            line-height 20px
            overflow hidden
            color #A9A9A9
            overflow hidden
        .book-btn
          width 60px
          text-align center
          color #469BB4
          font-weight bold
          >span 
            color red
            line-height 30px

</style>
