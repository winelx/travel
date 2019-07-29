<template>
  <div class="con">
    <base-header :title="title"></base-header>
    <div>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import Qs from "Qs"
  import BaseHeader from "../../common/header/BaseHeader"

  export default {
    name: "DriverList",
    data() {
      return {
        title: "司机列表"
      }
    },
    components: {
      BaseHeader,
    },
    methods: {
      request() {
        const datas = {
          "page.pn": "1",
          "page.size": "999",
          "pageMode": "pageMode"
        }
        axios({
          method: 'post',
          url: '/api/admin/bookcar/cardriverinfo/ajaxLis',
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
      this.request()
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    width 100%
    height 100%
</style>
