// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
//允许跨域
axios.defaults.withCredentials=true
//请求超时
axios.defaults.timeout = 10000;
//post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.config.productionTip = false
/*解决app端300ms延迟*/
fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  data: function(){
    return {
      jsonId: '1212',
    }
  },
  components: {App,Counter},
  template: '<App/>'
})
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
