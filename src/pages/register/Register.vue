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
    name: "Register",
    data() {
      return {
        title: "注册"
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
