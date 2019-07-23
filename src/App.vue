<template>
  <div id="app">
 <!--   //exclude起过滤效果-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
</style>
