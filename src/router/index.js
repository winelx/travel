import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Hotel from '../pages/hotel/Hotel'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Subscribe from '../pages/subscribe/Subscribe'
import calendar from '../common/calendar/calendar'
import RoomDetails from '../pages/details/RoomDetails'
import VehicleList from '../pages/vehicle/VehicleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,

    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: calendar,
    },
    {
      path: '/roomdetails',
      name: 'RoomDetails',
      component: RoomDetails,
    }, {
      path: '/vehiclelist',
      name: 'VehicleList',
      component: VehicleList,
    }
  ],
  //界面切换时初始化界面高度
  scrollBehavior(to, form, savePosition) {
    return {x: 0, Y: 0}
  }
})
