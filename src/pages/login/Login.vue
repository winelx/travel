<template>
  <div>
    <login-header></login-header>
    <login-content></login-content>
  </div>
</template>

<script>
  import LoginHeader from './component/Header'
  import LoginContent from './component/Content'

  export default {
    name: "login",
    data() {
      return {}
    },
    components: {
      LoginHeader,
      LoginContent
    }
  }
</script>

<style lang="stylus" scoped>

</style>
