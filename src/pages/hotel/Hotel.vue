<template>
  <div>
    <div class="header">
      <base-header :title="title"></base-header>
    </div>
  <hotel-content  :list="list"></hotel-content>
  </div>
</template>

<script>
  import BaseHeader from "../../common/header/BaseHeader"
  import HotelContent from './component/Content'
  import axios from "axios"
  export default {
    name: "Hotel",
    data() {
      return {
        title: "酒店预订",
        list: []
      }
    },
    components: {
      BaseHeader,
      HotelContent
    },
    created() {
      this.request()
    },
    methods: {
      request() {
        axios({
          method: 'post',
          url: '/api/admin/jtlymanage/jtlymanageroom/getRoomDataList',
        }).then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        const data = res.data
        this.list=data.data
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    header 50px
    position fixed
</style>
