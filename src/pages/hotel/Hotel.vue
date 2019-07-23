<template>
  <div>
    <hotel-header></hotel-header>
    <hotel-content></hotel-content>
  </div>
</template>

<script>
  import HotelHeader from './component/Header'
  import HotelContent from './component/Content'

  export default {
    name: "Hotel",
    components: {
      HotelHeader,
      HotelContent
    }
  }
</script>

<style scoped>

</style>
