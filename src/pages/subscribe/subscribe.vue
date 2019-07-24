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
    }
  }
</script>

<style scoped>

</style>
