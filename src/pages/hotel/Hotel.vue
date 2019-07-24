<template>
  <div>
    <div class="header">
      <base-header  :title="title"></base-header>
    </div>

    <hotel-content :list="list"></hotel-content>
  </div>
</template>

<script>
  import BaseHeader from "../../common/header/BaseHeader"
  import HotelContent from './component/Content'

  export default {
    name: "Hotel",
    data() {
      return {
        title: "注册",
        list: [
          {
            id: "00"
          },
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          }
          ,
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          }
          ,
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          }
          ,
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          },
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          },
          {
            id: "01"
          },
          {
            id: "00"
          },
          {
            id: "01"
          }


        ]
      }
    },
    components: {
      BaseHeader,
      HotelContent
    }
  }
</script>

<style lang="stylus" scoped>
.header
    width 100%
    header 50px
    position fixed
</style>
