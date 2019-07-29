<template>
  <div>
    <base-header :title="title"></base-header>
    <subscribe-content :roomId="roomId" :price="price"></subscribe-content>
  </div>
</template>

<script>
  import BaseHeader from "../../common/header/BaseHeader"
  import SubscribeContent from "./component/Content"

  export default {
    name: "Subscribe",
    props:{

    },
    data() {
      return {
        title: "预订",
        roomId:"",
        price:""
      }
    },
    components: {
      BaseHeader,
      SubscribeContent
    },
    methods: {

    },
    created() {
      this.roomId=this.$route.query.roomId
      this.title= this.$route.query.roomName
      this.price= this.$route.query.price

    }
  }
</script>

<style scoped>

</style>
