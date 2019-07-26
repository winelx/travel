<template>
  <div>
    <base-header :title="title"></base-header>
    <subscribe-content></subscribe-content>
  </div>
</template>

<script>
  import BaseHeader from "../../common/header/BaseHeader"
  import SubscribeContent from "./component/Content"

  export default {
    name: "subscribe",
    data() {
      return {
        title: "预订"
      }
    },
    components: {
      BaseHeader,
      SubscribeContent
    },
    methods: {
      init() {
        console.log(this.$route.query.id)
        console.log(this.$route.query.name)
      }
    },
    created() {
      this.init();

    }
  }
</script>

<style scoped>

</style>
