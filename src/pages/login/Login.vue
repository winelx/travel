<template>
  <div>
    <base-header :title="title"></base-header>
    <login-content></login-content>
  </div>
</template>

<script>
  import BaseHeader from "../../common/header/BaseHeader"
  import LoginContent from './component/Content'

  export default {
    name: "login",
    data() {
      return {
        title:"登陆"
      }
    },
    components: {
      BaseHeader,
      LoginContent
    }
  }
</script>

<style lang="stylus" scoped>

</style>
